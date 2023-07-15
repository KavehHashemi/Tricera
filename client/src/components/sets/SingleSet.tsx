import "../../style/style.scss";
import { SetType } from "../../types";
import { Link } from "react-router-dom";
import { handleDate } from "../../utils";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentSet } from "../../store/sets";
import EditSetDialog from "./EditSetDialog";
import DeleteSetDialog from "./DeleteSetDialog";
import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

const SingleSet = ({ id, name, createdAt, lastReading, cards }: SetType) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCurrentSet({ name, id }));
  };

  return (
    <Card elevation={8} className="card">
      <CardHeader></CardHeader>
      <CardContent>
        <div id={id} onClick={() => handleClick()}>
          <Link to={`/sets/${name}`}>
            <div>{name}</div>
            <div>{handleDate(createdAt)}</div>
            <div>{handleDate(lastReading)}</div>
            <div>{cards.length}</div>
          </Link>
        </div>
      </CardContent>{" "}
      <CardActions>
        <div className="card-actions">
          <EditSetDialog oldName={name} id={id}></EditSetDialog>
          <DeleteSetDialog id={id} name={name}></DeleteSetDialog>
        </div>
      </CardActions>
    </Card>
  );
};

export default SingleSet;
