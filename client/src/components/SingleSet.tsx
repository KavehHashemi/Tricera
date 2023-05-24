import { SetType } from "../types";

import { Link } from "react-router-dom";
import {
  // context,
  handleDate,
} from "../utils";
import { useContext } from "react";

const SingleSet = ({ id, name, createdAt, lastReading, cards }: SetType) => {
  //   const url = useContext(context);

  return (
    <>
      <div id={id} style={{ border: "1px solid", cursor: "pointer" }}>
        <Link
          to={`/sets/${name}`}
          //   onClick={() => url({ cards: cards, name: name })}
        >
          <div>{name}</div>
        </Link>
        <div>{handleDate(createdAt)}</div>
        <div>{handleDate(lastReading)}</div>
        <div>{cards.length}</div>
      </div>

      {/* <Routes>
        <Route
          path={`/sets/*`}
          element={<Cards name={name} cards={cards}></Cards>}
        ></Route>
      </Routes> */}
    </>
  );
};

export default SingleSet;
