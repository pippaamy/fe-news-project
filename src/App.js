import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ArticleCard from "./components/ArticleCard";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          {/* <Header /> */}
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/?topic=:topic"></Route>
            <Route path="/articles/:id" element={<ArticleCard />}></Route>
          </Routes>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
