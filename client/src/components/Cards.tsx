import { CardType } from "../types";
import { handleDate } from "../utils";
import { CARDS_QUERY } from "../graphql";
import { useQuery } from "@apollo/client";

type props = {
  name: string | null;
  id: string | null;
};

const Cards = ({ name, id }: props) => {
  const { data, loading, error } = useQuery(CARDS_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("SETS_QUERY error", error);
    return <>{error.message}</>;
  } else {
    console.log(data.cards);

    return (
      <>
        <div>{name}</div>
        {data.cards?.map((cd: CardType, i: number) => {
          return (
            <div key={i}>
              <div>{cd.question}</div>
              <div>{cd.answer}</div>
              <div>{handleDate(cd.lastReading)}</div>
              <div>{handleDate(cd.createdAt)}</div>
            </div>
          );
        })}
      </>
    );
  }
};

export default Cards;
