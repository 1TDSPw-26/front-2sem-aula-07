import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import EditarProdutos from './routes/EditarProdutos/index.tsx'
import ErrorPage from './routes/ErrorPage/index.tsx'
import Home from './routes/Home/index.tsx'
import Produtos from './routes/Produtos/index.tsx'

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <ErrorPage />,
  children: [
    {path: '/', element: <Home />},
    {path: '/produtos', element: <Produtos />},
    {path: '/editar-produtos', element: <EditarProdutos />},
    {path: '*', element: <ErrorPage />}

  ]}
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
