import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'

// Optional: Layout Component (if needed)
import Layout from './Components/Layout.jsx' // Ensure this component exists

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Correct 'layout' component
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '*',
        element: <h1>Not Found!!</h1>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
