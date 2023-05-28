import { handleDate } from "../utils";
import DeleteCardDiallog from "./DeleteCardDiallog";
import EditCardDialog from "./EditCardDialog";

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
    <div
      id={id}
      style={{ border: "1px solid", backgroundColor: "#333", padding: "1rem" }}
    >
      <div>{question}</div>
      <div>{answer}</div>
      <div>{handleDate(lastReading)}</div>
      <div>{handleDate(createdAt)}</div>
      <EditCardDialog
        question={question}
        answer={answer}
        id={id}
        setId={set ?? ""}
      ></EditCardDialog>
      <DeleteCardDiallog id={id} setId={set ?? ""}></DeleteCardDiallog>
    </div>
  );
};

export default SingleCard;
