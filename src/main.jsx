import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Review from './components/Review/Review';
import About from './components/About/About';
import Layoutes from './components/Layoutes/Layoutes';
import Grandfa from './components/Grandfa/Grandfa';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layoutes/>,
    children:[
      {
        path: '/',
        element: <App/>,
        loader: () => fetch('data.json')
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/order',
        element: <Review/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/grandfa',
        element: <Grandfa/>
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
