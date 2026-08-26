import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


import EditarProdutos from './Routes/ErrorPage/index.tsx'
import Home from './Routes/Home/index.tsx'
import Produtos from './Routes/Produtos/index.tsx'
import ErrorPage from './Routes/ErrorPage/index.tsx'


import { createBrowserRouter } from 'react-router'


const router = createBrowserRouter([
  {
    path: '/', element: <App />, errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> },
      { path: '*', element: <ErrorPage /> }

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
