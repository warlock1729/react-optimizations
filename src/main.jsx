import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import AppLayout from './layout'; 
import './index.css';

import Home from "./Home"
import ListKeys from './pages/Hardik/ListKeys';
// const Home = lazy(() => import('./Home'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,  
    children: [
      {
        path: '',
        element: 
          <Home />
      },
      {
        path:'listKeys',
        element:<ListKeys />
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <> 
    <RouterProvider router={appRouter} />
  </>
);
