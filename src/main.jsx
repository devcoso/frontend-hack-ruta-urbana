import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Layout from './layout';

// Pages
import Dashboard from './pages/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, 
        element: <Dashboard />,
      },
    ],
    //errorElement: <p>Página No Encontrada</p>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      fallbackElement={<p> Loading... </p>}
    />
  </StrictMode>,
)
