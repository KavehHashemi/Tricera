import { useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { setCurrentSet } from "../store/sets";

const Home = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentSet({ id: null, name: null }));
  }, []);
  return <></>;
};

export default Home;
