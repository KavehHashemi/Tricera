import "./style/style.scss";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Sets from "./components/Sets";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Cards from "./components/Cards";
import Arrow from "@mui/icons-material/ChevronRight";
import { setLightMode } from "./store/mode";

const App = () => {
  const dispatch = useAppDispatch();
  const { currentSet } = useAppSelector((state) => state.sets);
  const { isLightMode } = useAppSelector((state) => state.mode);
  return (
    <BrowserRouter>
      <div className={isLightMode ? "app-l" : "app"}>
        <nav className="navbar">
          <Link to={"/sets"}>My Sets</Link>
          {currentSet.name !== null ? (
            <Arrow sx={{ color: isLightMode ? "#242424" : "#c8ff00" }}></Arrow>
          ) : (
            <></>
          )}
          <div id="heading">{currentSet.name}</div>
          <button onClick={() => dispatch(setLightMode(!isLightMode))}>
            {isLightMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
        <Routes>
          {/* <Route path="/" element={<Home></Home>}></Route> */}
          <Route path="/sets" element={<Sets></Sets>}></Route>
          <Route
            path={`/sets/${currentSet.name}`}
            element={<Cards id={currentSet.id} name={currentSet.name}></Cards>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
