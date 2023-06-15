import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"; 

import "./Styles.css";

function Login() {
    const navigate = useNavigate();


    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "N787808",
            password: "pwd1",
            isManager:1,
        },
        {
            username: "N787809",
            password: "pwd2",
            isManager:0,
        },
    ];

    const errors1 = {
        uname: "invalid username",
        pass: "invalid password",
    };

    const handleSubmit1 = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
        if (userData.password !== pass.value) {
            setErrorMessages({ name: "pass", message: errors1.pass });
        } else {
            if(userData.isManager){
                console.log(userData.isManager);
                navigate('/manager')
            }
            else{
                console.log(userData.isManager);
                navigate('/user')
            }
        }
        } else {
        setErrorMessages({ name: "uname", message: errors1.uname });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
        <form onSubmit={handleSubmit1}>
            <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
            <input type="submit" />
            </div>
        </form>
        </div>
    );

    return (
        <div>
            <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
            </div>
        </div>
    );
}

export default Login;
