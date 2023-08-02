import React from "react";
import './styles.css'
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { Link } from "react-router-dom";

export const Registration: React.FC = () => {
    return (
        <div className="main-regist">
            <form className="container-regist">
                <h2>Registration</h2>
                <Input labelText="Name" placeholdetText="Enter name" />
                <Input labelText="Email" placeholdetText="Enter email"/>
                <Input labelText="Password" placeholdetText="Enter password"/>
                <Button buttonText="Registration"/>
                <p>If you have an account you can <Link to='/login' style={{textDecoration: 'none'}}>Login</Link></p>
            </form>
        </div>
    )
};