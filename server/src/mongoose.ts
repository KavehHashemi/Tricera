import mongoose from "mongoose";
const setSchema = new mongoose.Schema({
  name: String!,
  lastReading: String,
  createdAt: String,
  cards: [
    {
      question: String,
      answer: String,
      lastReading: String,
      createdAt: String,
      history: [Boolean],
    },
  ],
});
export const Set = mongoose.model("Set", setSchema);
