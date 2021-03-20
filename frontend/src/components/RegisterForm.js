import React from 'react';
import { useHistory } from 'react-router-dom';

function RegisterForm() {
    const history = useHistory();

    function register(e) {
        e.preventDefault();
        const input = document.querySelectorAll('input');
        const name = input[0].value;
        const email = input[1].value;
        const phone = input[2].value;
        const country = input[3].value;
        const password1 = input[4].value;
        const password2 = input[5].value;
        const user = JSON.stringify({ name, email, phone, country, password1, password2 });
        const options = {
            body: user,
            method: 'POST',
            headers: new Headers( {
                'Content-Type': 'application/json',
            })
        }
        
        fetch('/register', options)
            .then(res => res.json())
            .then(res => {
                if (res.message === "ok")
                    history.push('/')
                else
                    alert(res.message)
            })
    }

    return (
        <form className="form-register">
            <input className="input" type="text" name="name" placeholder="Name"/>
            <input className="input" type="text" name="email" placeholder="Email"/>
            <input className="input" type="text" name="phone" placeholder="Phone"/>
            <input className="input" type="text" name="country" placeholder="Country"/>
            <input className="input" type="password" name="password1" placeholder="Password"/>
            <input className="input" type="password" name="password2" placeholder="Confirm password"/>
            <button onClick={register} className="button" type="submit">Submit</button>
        </form>
    );
}

export default RegisterForm