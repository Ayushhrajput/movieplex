import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Favourites from './components/Favourites.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path='/'
        element={<Layout/>}
      >
        <Route 
          index
          element={<Home/>}
        />
        <Route
          path='favourites'
          element={<Favourites/>}
        />
      </Route>
    )
)
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
