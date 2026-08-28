import churrosLindos from "../../img/churros.png";


export default function Conteudo() {
  return (
    <main>
        <h2>Conteúdo Aleatório</h2>        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur voluptates rem, blanditiis eius doloremque a vitae provident labore eligendi nobis magnam perspiciatis minima cumque rerum aliquam soluta voluptate. Aspernatur, provident.</p>
        <figure>
          <img src={churrosLindos} alt="churros maravilhindo" />
          <figcaption>Churros maravilhindos</figcaption>
        </figure>
    </main>
  )
}

