import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Admin from '../../Pages/Admin/Admin';
import Home from '../../Pages/Home/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/admin',
                element: <Admin></Admin>
            }
        ]
    },
]);

export default router;