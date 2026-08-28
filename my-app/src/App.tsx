import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
  
  return(
    <div className="flex flex-col justify-between w-screen h-screen">
      <Cabecalho/>
        <Outlet/>
      <Rodape/>
    </div>
  );
}