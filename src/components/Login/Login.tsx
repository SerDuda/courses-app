import React, { useState } from "react";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import './styles.css'
import { Link, useNavigate } from "react-router-dom";
import { TUserLogin } from "./types";

export const Login: React.FC = () => {
    const [userLogin, setUserLogin] = useState<TUserLogin>({email: '', password: ''})
    const navigate = useNavigate()

    const loginUserEmail = (e: { target: { value: string } }) => {
        setUserLogin((el) => ({...el, email: e.target.value}))
    }
    const loginUserPassword = (e: { target: { value: string } }) => {
        setUserLogin((el) => ({...el, password: e.target.value}))
    }

    const sendLoginInfo = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify(userLogin),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => res.json())
            // .then((data) => console.log(data))

        if(res.successful === true) {
            navigate('/courses')            
        }else {
            alert('not correct value')  
        }  
    }
    

    return (
        <div className="main-log">
            <form className="container-log" onSubmit={sendLoginInfo}>
                <h2>Login</h2>
                <Input labelText="Email" placeholdetText="Enter email" onChange={loginUserEmail}/>
                <Input labelText="Password" placeholdetText="Enter password" onChange={loginUserPassword}/>
                <Button buttonText="Login" />
                <p>If you have an account you can <Link to='/registration' style={{textDecoration: 'none'}}>Registration</Link></p>
            </form>
        </div>
    )
};