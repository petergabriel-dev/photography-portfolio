import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import ContactPage from './components/pages/ContactPage'
import HomePage from './components/pages/HomePage'

import Header from './components/sections/Header'
import Footer from './components/sections/Footer'

const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>,
    },
    {
      path: '/contact',
      element: <ContactPage/>,
    }
])

function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
