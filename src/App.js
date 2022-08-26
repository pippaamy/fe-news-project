import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ArticleCard from "./components/ArticleCard";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ChangeUser from "./components/ChangeUser";
import { UserContext } from "./components/User";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({
    username: "CoolDog",
    avatar_url:
      "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?cs=srgb&dl=pexels-simona-kidri%C4%8D-2607544.jpg&fm=jpg",
    kudos: 15,
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          {/* <Header /> */}
          <UserContext.Provider value={{ currentUser, setCurrentUser }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/?topic=:topic"></Route>
              <Route path="/articles/:id" element={<ArticleCard />}></Route>
              <Route path="/users" element={<ChangeUser />}></Route>
            </Routes>
          </UserContext.Provider>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
