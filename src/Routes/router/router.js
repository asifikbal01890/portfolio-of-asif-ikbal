import React from 'react';
import Main from '../../Layout/Main';
import Home from '../../Component/Home/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }

    // {
    //     path: "*",
    //     element: <PageNotFound></PageNotFound>
    // }
])

export default router;