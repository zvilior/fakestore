import React, { useState } from 'react';
import axios from 'axios';
function SignUp() {
    const onSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.elements.firstName.value;
        const lastName = e.target.elements.lastName.value;
        const email = e.target.elements.email.value;
        const passsword = e.target.elements.password.value;

        // console.log(email, typeof (email), typeof (passsword), passsword);
        axios.post('http://localhost:3001/api/users/signup', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passsword
        })
            .then((response) => {
                console.log(response.data);
                localStorage.newUserToken = response.data;
            });

    };

    const [isDisabled, setIsDisabled] = useState(true);


    const onChange = (e) => {
        setIsDisabled(!e.target.value);
    };




    return (
        <>
            <form onSubmit={onSubmit}>
                <input name="firstName" placeholder='firstName' type="text" required />
                <br />
                <input name="lastName" placeholder='lastName' type="text" required />
                <br />
                <input name="email" placeholder='email' type="email" required />
                <br />
                <input name="password" placeholder='password' type="password" required onChange={onChange} />
                <br />

                <br />
                <button disabled={isDisabled}>SignUp</button>
            </form>
        </>
    )
}
export default SignUp






