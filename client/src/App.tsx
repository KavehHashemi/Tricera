import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Sets from "./components/Sets";
import { useAppSelector } from "./store/hooks";
import Cards from "./components/Cards";

const App = () => {
  const { currentSet } = useAppSelector((state) => state.sets);
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/sets"}>My Sets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/sets" element={<Sets></Sets>}></Route>
        <Route
          path={`/sets/${currentSet.name}`}
          element={<Cards id={currentSet.id} name={currentSet.name}></Cards>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
