import { Outlet } from "react-router";
import Cabecalho from "./components/Cabecalho/Cabecalho";
// imports removidos pois não eram utilizados
import Rodape from "./components/Rodape/Rodape";

export default function App(){

  return(
    <div>
       <Cabecalho/>
       
       
       {/* Crie aqui um componente que represente o conteúdo */}
<Outlet/>
       
       {/* Crie aqui um componente que represente o rodapé */}
        <Rodape/>

    </div>


      

  );
}
