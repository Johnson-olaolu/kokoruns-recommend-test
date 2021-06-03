import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createContext, useContext, useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Recommendations from './components/Recommendations'
import '../src/assets/main.css'
import Login from './components/Login'
import {UserContext, UserLoggedIn} from './User'

function App() {
    const [user, setUser] = useState(UserContext)
    const [loggedIn, setLoggedIn] = useState(UserLoggedIn)
    return (
        <Router>
            <div>
                <UserLoggedIn.Provider value={{loggedIn, setLoggedIn}}>
                    <UserContext.Provider value={{user,setUser}}>
                        <Header/>
                        <Switch>
                            <Route path="/recommendation" exact>
                                <Recommendations/>
                            </Route>
                            <Route path="/" exact>
                                <Login/>
                            </Route>
                        </Switch>
                        <Footer/>
                    </UserContext.Provider>
                </UserLoggedIn.Provider>
            </div>
        </Router>

    );
}

export default App;
