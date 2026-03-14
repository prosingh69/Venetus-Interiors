import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AppLayout from './components/Layout/AppLayout'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Service from './pages/Service'
import Review from './pages/Review'
const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/Portfolio",
          element:<Portfolio/>
        },
        {
          path:"/Service",
          element:<Service/>
        },
        {
          path:"/Review",
          element:<Review/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App