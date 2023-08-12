import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import './stylesHeader.css'
import { useLocation, useNavigate } from 'react-router-dom';


export const Header: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const userLoginInfo = JSON.parse(localStorage.getItem('user') as string)

    const userLogout = () => {
        localStorage.removeItem('user')
        navigate('/login')
    }

    const userLogin = () => {
        navigate('/login')
    }

    return (
        <div className='header'>
            <Logo />
            {location.pathname !== '/login' && location.pathname !== '/registration' ? (
                            <div className='user-info'>
                            <p>{userLoginInfo ? userLoginInfo.user.name : ''}</p>
                            {userLoginInfo ?
                                <Button buttonText="Logout" onClick={userLogout}/>
                                :
                                <Button buttonText="Login" onClick={userLogin}/>}
                        </div>
            ) : null}
        </div>
    )
};