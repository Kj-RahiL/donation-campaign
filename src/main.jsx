import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import DonationDetails from './Components/DonationDetails/DonationDetails';
import ErrorElement from './Components/ErorElement/ErrorElement';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/donation",
        element: <Donation></Donation>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/catagory/:id",
        loader: (()=> fetch('/donation.json')),
        element: <DonationDetails></DonationDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
