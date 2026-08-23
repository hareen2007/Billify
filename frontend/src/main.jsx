import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Error from './pages/Error.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Form from './pages/FormInput.jsx'
import New from './pages/Forget.jsx'
import Bill from './pages/Template.jsx'
import { Toaster } from "react-hot-toast";

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>

  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    errorElement:<Error/>
  },
  {
    path:'/form',
    element:<Form/>,
    errorElement:<Error/>
  },
  {
    path:'/forget_password',
    element:<New/>,
    errorElement:<Error/>
    
  },
  {
    path:'/template',
    element:<Bill/>,
    errorElement:<Error/>
  },
  {
    path:'/login',
    element:<Signin/>,
    errorElement:<Error/>
  },
  {
    path:'/signup',
    element:<Signup/>,
    errorElement:<Error/>
  },
  
]);


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Toaster
  position="top-center"
  toastOptions={{
    style: {
      zIndex: 99999,
    },
  }}
/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
