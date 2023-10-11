import "./style/style.scss";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAppSelector } from "./store/hooks";
import Sets from "./components/sets/Sets";
import Cards from "./components/cards/Cards";
import Home from "./components/Home";
import Navbar from "./components/navbar/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { generateTheme } from "./Themes";
import Paper from "@mui/material/Paper";

const App = () => {
  const { user } = useAuth0();
  const { currentSet } = useAppSelector((state) => state.sets);
  const { isLightMode } = useAppSelector((state) => state.mode);

  const customTheme = generateTheme(isLightMode);

  return (
    <ThemeProvider theme={customTheme}>
      <Paper sx={{ minHeight: "100dvh" }}>
        <Navbar currentSet={currentSet.name} isLightMode={isLightMode}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/sets"
            element={<Sets userId={user?.sub?.split("|")[1]}></Sets>}
          ></Route>
          <Route
            path={`/sets/${currentSet.name}`}
            element={<Cards id={currentSet.id} name={currentSet.name}></Cards>}
          ></Route>
        </Routes>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
