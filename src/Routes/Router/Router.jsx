import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Admin from '../../Pages/Admin/Admin';
import Home from '../../Pages/Home/Home/Home';
import ProductInfo from '../../Pages/ProductInfo/ProductInfo';

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
            },
            {
                path: '/product/:id',
                element: <ProductInfo></ProductInfo>,
                loader: ({ params }) => fetch(`https://soft-tech-server.vercel.app/product/${params.id}`),
            }
        ]
    },
]);

export default router;