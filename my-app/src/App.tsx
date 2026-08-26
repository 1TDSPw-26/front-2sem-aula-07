import Cabecalho from "./components/Cabecalho/Cabecalho";
import Card from "./components/Card/Card";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App(){
  
  return(
    <div>
      <Cabecalho/>
    
    {/* Crie aqui um componente que represente o conteúdo */}
    
      <Conteudo/>
    
    {/* Crie aqui um componente que represente o rodapé */}
    
      <Rodape/>
    </div>
  );
}