import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createContext, useContext, useState} from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import '../src/assets/main.css'
import Login from './components/loginPage/Login'
import {UserContext, UserLoggedIn} from './User'
import RecommendationPage from './components/recommendationPage/RecommendationPage'

function App() {

    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/recommendation" exact>
                        <RecommendationPage/>
                    </Route>
                    <Route path="/" exact>
                        <Login/>
                    </Route>
                </Switch>
                <Footer/>
            </div>
        </Router>

    );
}

export default App;
