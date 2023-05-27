import { handleDate } from "../utils";

type props = {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  lastReading: string;
  history: boolean[];
};

const SingleCard = ({
  id,
  question,
  answer,
  lastReading,
  createdAt,
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
    </div>
  );
};

export default SingleCard;
