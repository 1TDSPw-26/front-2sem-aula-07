import Cabecalho from "./components/Cabecalho/Cabecalho";
import Card from "./components/Card/Card";
import Conteudo from "./components/Conteudo/Conteudo";
import Rodape from "./components/Rodape/Rodape";

export default function App(){

  return(
    <div>
      <Cabecalho/>

      {/*Crie aqui um componente que represente o conteudo*/}
      <Conteudo/>

      <Card>
        
      </Card>

      {/*Crie aqui um componente que represente o rodape*/}
      <Rodape/>

    </div>

      

  );
}