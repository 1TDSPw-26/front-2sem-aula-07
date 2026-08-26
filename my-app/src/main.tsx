import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import Home from './Routes/Home/Index.tsx'
import Produtos from './Routes/Produtos/Index.tsx'
import ErrorPage from './Routes/ErrorPage/Index.tsx'
import EditarProdutos from './Routes/EditarProdutos/Index.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <ErrorPage />, Children: [
    {path: '/', element: <Home />}
    { path: '/Produtos', element: <Produtos /> }
    { path: '/editar-produtos', element: <EditarProdutos /> }
    { path: '*', element: <ErrorPage /> }
  ]}  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
