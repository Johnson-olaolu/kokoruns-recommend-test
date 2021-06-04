import React, {useState, useEffect, useContext} from 'react'
import { UserContext, UserLoggedIn } from '../../User';
import { useHistory } from 'react-router-dom'
var axios = require('axios');

const Login = () => {
    let history =useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const changeEmail = (e) => {
        const {name, value} = e.target
        setEmail(value)
    }

    const changePassword = (e) => {
        const {name, value} = e.target
        setPassword(value)
    }

    const onSubmit = () => {
        
        //console.log({email , password})
        axios.post("https://kokoruns-api.herokuapp.com/api/auth/login", {email : email, pass_word: password})
            .then(res => {
                //console.log(res.data)
                var data = JSON.stringify(res.data)
                localStorage.setItem('user', data)
                localStorage.setItem('loggedIn', true)
                history.push("/recommendation")
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <section className="container py-5">
            <div className="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input
                        onChange={changeEmail}
                        type="email"
                        value={email}
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input
                        onChange={changePassword}
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Password"/>
                </div>
            </div>
            <button onClick={onSubmit} type="submit" className="btn btn-primary">Sign in</button>
        </section>
    )
}

export default Login
