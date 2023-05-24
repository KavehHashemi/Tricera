export const handleDate = (timeStamp: string) => {
  const c = timeStamp.length === 10 ? 1000 : 1;
  return new Date(+timeStamp * c).toDateString();
};

import { createContext } from "react";
import { CardType } from "./types";

// export type urlContext = {
//   // name: string;
//   // cards: CardType[];
//   seturl: React.Dispatch<
//     React.SetStateAction<{
//       cards: never[];
//       name: string;
//     }>
//   >;
// };

// const defaultContext: urlContext = {
//   // name: "",
//   // cards: [],
//   seturl: () => {
//     return;
//   },
// };

// export const context = createContext(defaultContext);
