import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

import './styles.css'


const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <div className="main-container">
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;