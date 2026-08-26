import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import {createBrowserRouter, RouterProvider} from 'react-router'

import EditarProdutos from './Routes/EditarProdutos/Index.tsx'
import ErrorPage from './Routes/ErrorPage/ErrorPage.tsx'
import Home from './Routes/Home/Index.tsx'
import Produtos from './Routes/Produtos/Index.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />, errorElement: <ErrorPage />, 
    children: [
      {path: "/editar-produtos", element: <EditarProdutos />},
      {path: "/produtos", element: <Produtos />},
      {path: "/", element: <Home />},
      {path: "*", element: <ErrorPage />}
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
