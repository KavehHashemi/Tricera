import { SetType } from "../types";

import { Link } from "react-router-dom";
import { handleDate } from "../utils";
import { useAppDispatch } from "../store/hooks";
import { setCurrentSet } from "../store/sets";
import EditSetDialog from "./EditSetDialog";
import DeleteSetDialog from "./DeleteSetDialog";

const SingleSet = ({ id, name, createdAt, lastReading, cards }: SetType) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCurrentSet({ name, id }));
  };

  return (
    <div style={{ border: "1px solid", cursor: "pointer" }}>
      <div id={id} onClick={() => handleClick()}>
        <Link to={`/sets/${name}`}>
          <div>{name}</div>
        </Link>
        <div>{handleDate(createdAt)}</div>
        <div>{handleDate(lastReading)}</div>
        <div>{cards.length}</div>
      </div>
      <EditSetDialog oldName={name} id={id}></EditSetDialog>
      <DeleteSetDialog id={id} name={name}></DeleteSetDialog>
    </div>
  );
};

export default SingleSet;
