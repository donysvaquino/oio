import Button from "../components/Button";
import oculos1 from "../assets/oculos1.png";
import ".././Area3d.css";

export default function Area3d() {
  return (
    <section className="area3d">
      <h1 className="title3D">UM MUNDO MAIS CLARO, COM SOM.</h1>
      <p className="paragrafo">
        Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor
        lorem ipsum dolor Lore, lorem, lorel lorem ipsum dolor lorem ipsum dolor
        lorem ipsum lorem ipsum{" "}
      </p>
      <img src={oculos1} className="oculos3d" alt="oculos" />
      <div className="statsArea">
        <div className="stats">
          <h2>8hrs</h2>
          <p>Vida da Bateria</p>
        </div>
        <div className="stats">
          <h2>8hrs</h2>
          <p>Vida da Bateria</p>
        </div>
        <div className="stats">
          <h2>8hrs</h2>
          <p>Vida da Bateria</p>
        </div>
        <div className="stats">
          <h2>8hrs</h2>
          <p>Vida da Bateria</p>
        </div>
      </div>
      <Button />
    </section>
  );
}
