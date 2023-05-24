export type SetType = {
  id: string;
  name: string;
  createdAt: string;
  lastReading: string;
  cards: CardType[];
};

export type CardType = {
  question: string;
  answer: string;
  lastReading: string;
  createdAt: string;
  history?: boolean[];
};
