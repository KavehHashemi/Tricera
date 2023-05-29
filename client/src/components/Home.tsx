import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setCurrentSet } from "../store/sets";
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const dispatch = useAppDispatch();
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    dispatch(setCurrentSet({ id: null, name: null }));
  }, []);
  return <Button onClick={() => loginWithRedirect()}>SignIn</Button>;
};

export default Home;
