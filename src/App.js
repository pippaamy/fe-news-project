import "./App.css";
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
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  });

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
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
