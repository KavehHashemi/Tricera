import "./App.css";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Sets from "./components/Sets";

// import Cards from "./components/Cards";
// import { context, urlContext } from "./utils";
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  // const [ctx, setCtx] = useState({ cards: [], name: "" });
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/sets"}>My Sets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <context.Provider value={setCtx}> */}
        <Route path="/sets" element={<Sets></Sets>}></Route>
        {/* </context.Provider> */}
        <Route
        // path={`/sets/${ctx.name}`}
        // element={<Cards name={ctx.name} cards={ctx.cards}></Cards>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
