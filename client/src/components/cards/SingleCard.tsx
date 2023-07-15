import { useAppSelector } from "../../store/hooks";
import "../../style/style.scss";
import { handleDate } from "../../utils";
import DeleteCardDialog from "./DeleteCardDialog";
import EditCardDialog from "./EditCardDialog";

import { Card, CardActions, CardContent, CardHeader } from "@mui/material";

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
  const { isLightMode } = useAppSelector((state) => state.mode);
  return (
    <Card className="card">
      <CardHeader></CardHeader>
      <CardContent>
        <div>{question}</div>
        <div>{answer}</div>
        <div>{handleDate(lastReading)}</div>
        <div>{handleDate(createdAt)}</div>
        <div className="card-actions">
          <EditCardDialog
            question={question}
            answer={answer}
            id={id}
            setId={set ?? ""}
          ></EditCardDialog>
          <DeleteCardDialog id={id} setId={set ?? ""}></DeleteCardDialog>
        </div>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default SingleCard;
