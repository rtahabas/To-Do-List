import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Button from '@mui/material/Button';

const Root = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default Root;
