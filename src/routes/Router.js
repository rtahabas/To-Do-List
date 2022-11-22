import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Root from '@features/root/Root';

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route path="/" element={<h1>Home</h1>} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
