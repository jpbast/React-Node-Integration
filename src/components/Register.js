import React from 'react';
import RegisterForm from './RegisterForm';
import '../styles/Register.css';
import BackgroundImage from './BackgroundImage';
import { useLocation } from 'react-router';

function Register() {
    document.title = "Register";
    document.getElementById('favicon').href = "./assets/register-favicon.png"
    document.querySelector('body').style.backgroundColor = "rgb(230, 230, 230)";

    const location = useLocation();
    console.log(location, 'register');
    return (
        <div className="body">
            <div className="container">
                <div className="register">
                    <h1 className="h1-register">Register</h1>
                    <RegisterForm/>
                </div>
            </div>
            <BackgroundImage/>
        </div>
    );
}

export default Register;