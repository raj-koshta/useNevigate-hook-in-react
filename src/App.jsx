import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./components/layouts/AppLayout.jsx"
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/ErrorPage.jsx';

const App = () => {

  const render = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/useNevigate-hook-in-react/",
          element: <Home />
        },
        {
          path: "/useNevigate-hook-in-react/contact",
          element: <Contact />
        },
        {
          path: "/useNevigate-hook-in-react/service",
          element: <Service />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={render} />
  )
}

export default App