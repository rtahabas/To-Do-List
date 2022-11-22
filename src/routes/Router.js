import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Root from '@features/root/Root';
import Home from '@features/root/components/home/Home';

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
