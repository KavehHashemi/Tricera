import "./style/style.scss";
import { Link, Routes, Route } from "react-router-dom";
import Sets from "./components/Sets";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import Cards from "./components/Cards";
import Arrow from "@mui/icons-material/ChevronRight";
import Switch from "@mui/material/Switch";
import Light from "@mui/icons-material/LightMode";
import Dark from "@mui/icons-material/DarkMode";
import { setLightMode } from "./store/mode";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./components/Home";

const App = () => {
  const dispatch = useAppDispatch();
  const { currentSet } = useAppSelector((state) => state.sets);
  const { isLightMode } = useAppSelector((state) => state.mode);
  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          root: {
            color: isLightMode ? "#242424" : "#f5f5f5",
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            backgroundColor: isLightMode ? "#fff" : "#242424",
            // color: isLightMode ? "#242424" : "#f5f5f5",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={isLightMode ? "app-l" : "app"}>
        <nav className="navbar">
          <div style={{ display: "flex" }}>
            <Link to={"/"}>Home</Link>
            <Arrow
              fontSize="small"
              sx={{ color: isLightMode ? "#242424" : "#c8ff00" }}
            ></Arrow>
            <Link to={"/sets"}>My Sets</Link>
            {currentSet.name !== null ? (
              <Arrow
                fontSize="small"
                sx={{ color: isLightMode ? "#242424" : "#c8ff00" }}
              ></Arrow>
            ) : (
              <></>
            )}
            <div id="heading">{currentSet.name}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Dark fontSize="small"></Dark>
            <Switch
              color="default"
              checked={isLightMode}
              onChange={() => dispatch(setLightMode(!isLightMode))}
            ></Switch>
            <Light fontSize="small"></Light>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/sets" element={<Sets></Sets>}></Route>
          <Route
            path={`/sets/${currentSet.name}`}
            element={<Cards id={currentSet.id} name={currentSet.name}></Cards>}
          ></Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
