import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Layout from './Layout';

// Pages
import Dashboard from './pages/Dashboard';

//Loaders
import { loader } from './pages/Dashboard';
import LoadingPage from './pages/LoadingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Dashboard />,
        loader,
      },
    ],
    errorElement: <p>Hubo un error</p>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<LoadingPage />}
    />
  </StrictMode>,
)
