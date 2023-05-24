import { CardType } from "../types";
import { handleDate } from "../utils";

type props = {
  name: string;
  cards: CardType[];
};

const Cards = ({ name, cards }: props) => {
  return (
    <>
      <div>{name}</div>
      {cards?.map((cd) => {
        return (
          <>
            <div>{cd.question}</div>
            <div>{cd.answer}</div>
            <div>{handleDate(cd.lastReading)}</div>
            <div>{handleDate(cd.createdAt)}</div>
          </>
        );
      })}
    </>
  );
};

export default Cards;
