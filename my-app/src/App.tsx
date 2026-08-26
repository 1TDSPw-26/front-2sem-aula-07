import Card from "./components/Card/Card";
import Conteudo from "./components/Conteudo/Conteudo";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function App() {

  return (
    <>
      <div>
        <Header />
        <Conteudo />
        <Card />
        <Footer />
      </div>
    </>
  );
}