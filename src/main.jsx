import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import AppLayout from './layout'; 
import './index.css';

import OuseCallBack from "./pages/Saurabh/Optimized/UseCallBack"
import UuseCallBack from "./pages/Saurabh/UnOptimized/UseCallBack"
import OuseMemo from "./pages/Saurabh/Optimized/UseMemo"
import UuseMemo from "./pages/Saurabh/UnOptimized/UseMemo"
import Home from "./Home"
import ListKeys from './pages/Hardik/ListKeys';
import UnoptimizedUseTransition from './pages/Saurabh/UnOptimized/UseTransition';
import OptimizedUseTransition from './pages/Saurabh/Optimized/UseTransition';
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
      {
        path: 'useMemo/optimized',
        element: <OuseMemo />,
      },
      {
        path: 'useMemo/unoptimized',
        element: <UuseMemo />,
      },
      {
        path: 'callbacks/optimized',
        element: <OuseCallBack />,
      },
      {
        path: 'callbacks/unoptimized',
        element: <UuseCallBack />,
      },
      {
        path: 'useTrans/optimized',
        element: <OptimizedUseTransition />,
      },
      {
        path: 'useTrans/unoptimized',
        element: <UnoptimizedUseTransition />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <> 
    <RouterProvider router={appRouter} />
  </>
);
