import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Main from './layout/Main.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx';
import Login from '/components/Login/Login.jsx';
import Register from '/components/Login/Register.jsx';
import NotFound from './components/NotFound.jsx';
import PublicRoutes from './routes/PublicRoutes.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:() => fetch('/data.json').then(response => response.json())

      },

     
      {
        path:'/login',
        element: <PublicRoutes><Login></Login></PublicRoutes>

      },
     
      {
        path:'/signup',
        element: <PublicRoutes><Register></Register></PublicRoutes>
      },
      
      


      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
