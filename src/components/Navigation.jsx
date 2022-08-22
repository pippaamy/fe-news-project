import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <section>
      <nav className="nav">
        <Link className="navlink" to="/">
          Home{" "}
        </Link>
      </nav>
    </section>
  );
};

export default Navigation;
