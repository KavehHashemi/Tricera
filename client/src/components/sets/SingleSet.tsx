import "../../style/style.scss";
import { SetType } from "../../types";
import { Link } from "react-router-dom";
import { handleDate } from "../../utils";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentSet } from "../../store/sets";
import EditSetDialog from "./EditSetDialog";
import DeleteSetDialog from "./DeleteSetDialog";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const SingleSet = ({ id, name, createdAt, lastReading, cards }: SetType) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setCurrentSet({ name, id }));
  };

  return (
    <Card id={id} elevation={4} className="card">
      <Link
        to={`/sets/${name}`}
        color="text.primary"
        onClick={() => handleClick()}
      >
        <CardContent>
          <Typography variant="h6" color="secondary" gutterBottom>
            {name}
          </Typography>
          <Typography color="text.primary">{handleDate(createdAt)}</Typography>
          <Typography color="text.primary">
            {handleDate(lastReading)}
          </Typography>
          <Typography color="text.primary">{cards.length}</Typography>
        </CardContent>
      </Link>
      <Divider></Divider>
      <CardActions>
        <EditSetDialog oldName={name} id={id}></EditSetDialog>
        <DeleteSetDialog id={id} name={name}></DeleteSetDialog>
      </CardActions>
    </Card>
  );
};

export default SingleSet;
