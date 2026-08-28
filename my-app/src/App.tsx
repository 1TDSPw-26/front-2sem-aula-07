import { Outlet } from "react-router";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

export default function App(){

  return (
    <div className="flex flex-col justify-between w-screen h-screen">
      <Cabecalho />
        <Outlet />
      <Rodape />
    </div>
  );
}