import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';

function LoginForm() {
    const history = useHistory();

    function getAlert() {
        const input = document.querySelectorAll('input');
        const email = input[0].value;
        const password = input[1].value;
        const user = JSON.stringify({ email, password })
        const options = {
             method: "POST",
             headers: new Headers({ 'Content-Type': 'application/json' }),
             body: user
        }
        fetch("http://localhost:3000/login", options)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    console.log(res.message)
                    alert(res.message)
                }
                if (res.token) {
                    sessionStorage.setItem("authorization-token", res.token)
                    history.push("/mural")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="form-login">
            <input className="input" type="text" name="email" placeholder="Email"/>
            <input className="input" type="password" name="password" placeholder="Password"/>
            <button className="button" onClick={getAlert}> Login </button>
        </div>          
    );
}

export default LoginForm;