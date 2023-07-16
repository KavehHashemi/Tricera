import "../../style/style.scss";
import { handleDate } from "../../utils";
import DeleteCardDialog from "./DeleteCardDialog";
import EditCardDialog from "./EditCardDialog";

import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

type props = {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  lastReading: string;
  history: boolean[];
  set: string | null;
};

const SingleCard = ({
  id,
  question,
  answer,
  lastReading,
  createdAt,
  set,
}: props) => {
  return (
    <Card elevation={4} className="card">
      <CardContent>
        <Typography variant="h6" color="secondary" gutterBottom>
          {question}
        </Typography>
        {/* <div>{answer}</div> */}
        <div>{handleDate(lastReading)}</div>
        <div>{handleDate(createdAt)}</div>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <EditCardDialog
          question={question}
          answer={answer}
          id={id}
          setId={set ?? ""}
        ></EditCardDialog>
        <DeleteCardDialog id={id} setId={set ?? ""}></DeleteCardDialog>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
