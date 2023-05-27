import { SetType } from "../types";

import { Link } from "react-router-dom";
import { handleDate } from "../utils";
import { useAppDispatch } from "../store/hooks";
import { setCurrentSet } from "../store/sets";

const SingleSet = ({ id, name, createdAt, lastReading, cards }: SetType) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCurrentSet({ name, id }));
  };

  return (
    <>
      <div
        id={id}
        style={{ border: "1px solid", cursor: "pointer" }}
        onClick={() => handleClick()}
      >
        <Link to={`/sets/${name}`}>
          <div>{name}</div>
        </Link>
        <div>{handleDate(createdAt)}</div>
        <div>{handleDate(lastReading)}</div>
        <div>{cards.length}</div>
      </div>
    </>
  );
};

export default SingleSet;
