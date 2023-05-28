import { CardType } from "../types";
import { CARDS_QUERY } from "../graphql";
import { useQuery } from "@apollo/client";
import SingleCard from "./SingleCard";
import AddCardDialog from "./AddCardDialog";

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
    console.error("CARDS_QUERY error", error);
    return <>{error.message}</>;
  } else {
    console.log(data.cards);

    return (
      <>
        <div>{name}</div>
        {data.cards?.map((cd: CardType, i: number) => {
          return (
            <SingleCard
              key={i}
              question={cd.question}
              answer={cd.answer}
              id={cd.id}
              createdAt={cd.createdAt}
              lastReading={cd.lastReading}
              history={[]}
              set={id}
            ></SingleCard>
          );
        })}
        <AddCardDialog setId={id ?? ""}></AddCardDialog>
      </>
    );
  }
};

export default Cards;
