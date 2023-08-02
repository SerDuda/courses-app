import React from "react";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import './styles.css'
import { Link } from "react-router-dom";

export const Login: React.FC = () => {
    return (
        <div className="main-log">
            <form className="container-log">
                <h2>Login</h2>
                <Input labelText="Email" placeholdetText="Enter email" />
                <Input labelText="Password" placeholdetText="Enter password" />
                <Button buttonText="Login" />
                <p>If you have an account you can <Link to='/registration' style={{textDecoration: 'none'}}>Registration</Link></p>
            </form>
        </div>
    )
};