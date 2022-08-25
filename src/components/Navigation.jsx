import { Link } from "react-router-dom";
import dog from "./dog.jpg";
const Navigation = () => {
  return (
    <section>
      <nav className="nav">
        <Link className="navlink" to="/">
          <header>
            <img src={dog} className="dog"></img>
          </header>
        </Link>
      </nav>
    </section>
  );
};

export default Navigation;
