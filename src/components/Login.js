import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const passsword = e.target.elements.password.value;

        console.log(email, typeof (email), typeof (passsword), passsword);
        axios.post('http://localhost:3001/api/users/login', {
            email: email,
            password: passsword
        })
            .then((response) => {
                console.log(response.data);
                localStorage.token = response.data.token;
                localStorage.user = JSON.stringify(response.data.user)
                if (response.data) {
                    navigate("/cat", { state: "ok" })
                }
            });

    };

    const [isDisabled, setIsDisabled] = useState(true);
    const [isInputValid, setIsInputValid] = useState(false);
    const [isInput2Valid, setIsInput2Valid] = useState(false);

    const onChange = (e) => {
        setIsInputValid(e.target.value);
        setIsDisabled(!e.target.value || !isInput2Valid);
    };

    const onChange2 = (e) => {
        setIsInput2Valid(e.target.value);
        setIsDisabled(!e.target.value || !isInputValid);
    };


    return (
        <>
            <form onSubmit={onSubmit}>
                <label>
                    email
                    <input name="email" onChange={onChange} />
                    {isInputValid && <span>✅</span>}
                </label>
                <br />
                <label>
                    password
                    <input name="password" onChange={onChange2} />
                    {isInput2Valid && <span>✅</span>}
                </label>
                <br />
                <button disabled={isDisabled}>Submit</button>
            </form>
            <Link to="/signup" >
                <p>sign up</p>
            </Link>

        </>
    );
}
export default Login;