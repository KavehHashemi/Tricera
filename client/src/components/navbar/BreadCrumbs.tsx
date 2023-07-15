// import { Link } from "react-router-dom";
import Arrow from "@mui/icons-material/ChevronRight";
import { Breadcrumbs, Toolbar, Link } from "@mui/material";
type props = {
  isLightMode: boolean;
  currentSet: string | null;
};
const BreadCrumbs = ({ currentSet }: props) => {
  return (
    <Toolbar>
      <Breadcrumbs separator={<Arrow fontSize="small"></Arrow>}>
        <Link href="/">Home</Link>
        <Link href="/sets">My Sets</Link>
        {currentSet !== null ? <Link>{currentSet}</Link> : null}
      </Breadcrumbs>
    </Toolbar>
  );
};

export default BreadCrumbs;
