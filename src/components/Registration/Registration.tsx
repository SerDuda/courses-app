import React, { useState } from "react";
import './styles.css'
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { TNewUser } from "./types";

export const Registration: React.FC = () => {
    const navigate = useNavigate()

    const newUser: TNewUser = {
        name: '',
        email: '',
        password: ''
    }

    const [formValue, setFormValue] = useState(newUser)

    const createNewUserName = (e: { target: { value: string } }) => {
        setFormValue((el) => ({ ...el, name: e.target.value }))
    }

    const createNewUserEmail = (e: { target: { value: string } }) => {
        setFormValue((el) => ({ ...el, email: e.target.value }))
    }

    const createNewUserPassword = (e: { target: { value: string } }) => {
        setFormValue((el) => ({ ...el, password: e.target.value }))
    }

    const sendNewUser = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify(formValue),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())

        navigate('/login')
    };


    return (
        <div className="main-regist">
            <form className="container-regist" onSubmit={sendNewUser}>
                <h2>Registration</h2>
                <Input labelText="Name" placeholdetText="Enter name" name="name" valueText={formValue.name} onChange={createNewUserName} />
                <Input labelText="Email" placeholdetText="Enter email" name="email" valueText={formValue.email} onChange={createNewUserEmail} />
                <Input labelText="Password" placeholdetText="Enter password" name="password" valueText={formValue.password} onChange={createNewUserPassword} />
                <Button buttonText="Registration" type="submit"/>
                <p>If you have an account you can <Link to='/login' style={{ textDecoration: 'none' }}>Login</Link></p>
            </form>
        </div>
    )
};
