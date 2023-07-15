export type CardType = {
  id: String;
  question: String;
  answer: String;
  lastReading: String;
  history: Boolean[];
  createdAt: String;
};

export type SetType = {
  id: String;
  owner: String;
  name: String;
  cards: CardType[];
  lastReading: String;
  createdAt: String;
};
