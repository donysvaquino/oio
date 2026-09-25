import video from "./assets/video.mp4";
import Area3d from "./components/Area3d";
import Nav from "./components/Nav";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import Slider from "./components/Slider";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="hero">
        <video src={video} autoPlay loop muted playsInline />
        <h1>
          OIO <p>Glasses</p>
        </h1>
      </div>
      <Area3d />

      <section className="section1">
        <h1>
          Supere as limitações,
          <br /> expanda sua visão.
        </h1>
        <p>
          Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem
          ipsum dolor
        </p>
        <img src={img1} alt="Homem andando na rua usando OIO  " />
      </section>

      <section className="section2">
        <h1>
          Projetado para aumentar
          <br /> sua independência.
        </h1>
        <p>
          Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem
          ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor
          lorem ipsum dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum
          dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem
          ipsum dolor lorem ipsum dolor lorem ipsum dolo
        </p>
        <img
          src={img2}
          alt="Mulher andando na Avenida Paulista confiante usando OIO"
        />
      </section>

      <section className="section3">
        <h1>Como o OIO funciona?</h1>
        <p>
          Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor Lore, lorem Lore, lorem, lorel lorem ipsum
          dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor Lore,
          lorem
        </p>
        <img src={img3} alt="Demonstração visual do funcionamento do OIO" />
        <p>
          Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor lorem ipsum
          dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem
          ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor
          lorem ipsum dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum
          dolor lorem ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem
          ipsum dolor lorem ipsum dolor lorem ipsum dolor Lore, lorem, lorel
          lorem ipsum dolor lorem ipsum dolor
        </p>
      </section>

      <Slider />
    </div>
  );
}
