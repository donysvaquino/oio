import video from "./assets/video.mp4";
import Area3d from "./components/Area3d";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div>
      <Nav />
      <div className="hero">
        <video src={video} autoPlay loop muted playsInline />
      </div>
      <Area3d />

      <section></section>
    </div>
  );
}
