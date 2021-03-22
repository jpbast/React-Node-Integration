import React from 'react';
import LoginForm from './LoginForm';
import BackgroundImage from './BackgroundImage';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

function Login() { 
    document.getElementById('favicon').href = "./assets/favicon.png"
    document.querySelector('body').style.backgroundColor = "rgb(230, 230, 230)";
    
    return (
        <div className="body">    
            <div className="container">   
                <div className="login">
                    <h1 className="h1-login">Faça o seu login</h1>
                    <LoginForm/>
                    <span>
                        Not registered yet? Sign up <Link to="/register">here</Link>
                    </span>
                </div>
            </div>   
            <BackgroundImage/>
        </div>
    );
}

export default Login;