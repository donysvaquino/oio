import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to={"#"}>ABOUT</Link></li>
          <li><Link to={"#"}>MORE</Link></li>
          <li><Link to={"#"}>PRODUCT</Link></li>
        </ul>
        <h1>OIO</h1>
      </nav>
    </div>
  );
}
