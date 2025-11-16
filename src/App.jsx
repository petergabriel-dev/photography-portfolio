import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import './App.css'
import ContactPage from './components/pages/ContactPage'
import HomePage from './components/pages/HomePage'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

function Layout() {
  return(
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage/>,
        },
        {
          path: '/contact',
          element: <ContactPage/>,
        }
      ]
    }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
