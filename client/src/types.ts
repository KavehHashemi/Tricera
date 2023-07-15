export type SetType = {
  id: string;
  name: string;
  owner: string;
  createdAt: string;
  lastReading: string;
  cards: CardType[];
};

export type CardType = {
  id: string;
  question: string;
  answer: string;
  lastReading: string;
  createdAt: string;
  history?: boolean[];
};
