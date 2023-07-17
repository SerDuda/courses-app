import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from '../../common/Button/Button';
import './stylesHeader.css'

export const Header: React.FC = () => {
    return (
        <div className='header'>
            <Logo />
            <div className='user-info'>
                <p>Serhii</p>
                <Button buttonText={"Logout"}/>
            </div>
        </div>
    )
};