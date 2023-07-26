import React from "react";
import './styles.css'
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";

export const Registration: React.FC = () => {
    return (
        <div className="main-regist">
            <div className="container-regist">
                <h2>Registration</h2>
                <Input labelText="Name" placeholdetText="Enter name" />
                <Input labelText="Email" placeholdetText="Enter email"/>
                <Input labelText="Password" placeholdetText="Enter password"/>
                <Button buttonText="Registration"/>
                <p>If you have an account you can Login</p>
            </div>
        </div>
    )
};