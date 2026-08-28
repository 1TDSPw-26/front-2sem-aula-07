import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'


//Importar os objetos de rotas:
import { createBrowserRouter, RouterProvider } from 'react-router';

//Importação dos componentes de ROTAS
import EditarProdutos from './routes/EditarProdutos/index.tsx';
import ErrorPage from './routes/ErroPage/index.tsx';
import Home from './routes/Home/index.tsx';
import Produtos from './routes/Produtos/index.tsx';
import Conteudo from './routes/Conteudo/index.tsx';

//Montar um objeto que retorna uma props com as rotas:
const router = createBrowserRouter([
  {path: '/', element: <App />, errorElement: <ErrorPage />,children:[
    {path: '/', element: <Home />},
    {path: '/produtos', element: <Produtos />},
    {path: '/editar-produtos/:id', element: <EditarProdutos />},
    {path:"/churros", element:<Conteudo/>}
  ]}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
