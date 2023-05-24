import { useQuery } from "@apollo/client";
import { SETS_QUERY } from "../graphql";
import { SetType } from "../types";
import SingleSet from "./SingleSet";

const Sets = () => {
  const { data, loading, error } = useQuery(SETS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("SETS_QUERY error", error);
    return <>{error.message}</>;
  } else {
    return (
      <div className="container">
        {data.sets.map((st: SetType) => {
          return (
            <SingleSet
              key={st.id}
              id={st.id}
              name={st.name}
              createdAt={st.createdAt}
              lastReading={st.lastReading}
              cards={st.cards}
            ></SingleSet>
          );
        })}
      </div>
    );
  }
};

export default Sets;
