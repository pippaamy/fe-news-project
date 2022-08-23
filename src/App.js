import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/?topic=coding"></Route>
        <Route path="/?topic=cooking"></Route>
        <Route path="/?topic=football"></Route>
      </Routes>
    </div>
  );
}

export default App;
