import "../../style/style.scss";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { USER_SETS_QUERY } from "../../graphql";
import { SetType } from "../../types";
import SingleSet from "./SingleSet";
import AddSetDialog from "./AddSetDialog";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentSet } from "../../store/sets";
type props = {
  userId: string | undefined;
};
const Sets = ({ userId }: props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentSet({ id: null, name: null }));
  }, []);

  const { data, loading, error } = useQuery(USER_SETS_QUERY, {
    variables: { userId },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    return <>{error.message}</>;
  } else {
    return (
      <div className="container">
        {data.sets?.map((st: SetType) => {
          return (
            <SingleSet
              key={st.id}
              id={st.id}
              owner={st.owner}
              name={st.name}
              createdAt={st.createdAt}
              lastReading={st.lastReading}
              cards={st.cards}
            ></SingleSet>
          );
        })}
        <AddSetDialog></AddSetDialog>
      </div>
    );
  }
};

export default Sets;
