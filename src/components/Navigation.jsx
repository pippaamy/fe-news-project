import { useContext } from "react";
import { Link } from "react-router-dom";
import dog from "./dog.jpg";
import { UserContext } from "./User";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <section>
      <nav className="nav">
        <Link className="navlink" to="/">
          <header>
            <img src={dog} className="dog"></img>
          </header>
        </Link>
        <Link className="userLink" to="/users">
          <h2>Users</h2>
        </Link>
      </nav>
      <h2 className="currentUser_text">
        {" "}
        You are logged in as {currentUser.username}
      </h2>
      <img
        className="username_images"
        src={currentUser.avatar_url}
        alt={currentUser.username}
      />
    </section>
  );
};

export default Navigation;
