import BreadCrumbs from "./BreadCrumbs";
import Account from "./Account";
import ModeSwitch from "./ModeSwitch";
import { AppBar, Toolbar } from "@mui/material";

type props = {
  isLightMode: boolean;
  currentSet: string | null;
};

const Navbar = ({ currentSet, isLightMode }: props) => {
  return (
    <AppBar position="relative">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <BreadCrumbs
          currentSet={currentSet}
          isLightMode={isLightMode}
        ></BreadCrumbs>
        <Toolbar sx={{ gap: "1rem" }}>
          <Account></Account>
          <ModeSwitch isLightMode={isLightMode}></ModeSwitch>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
