import { Set } from "./mongoose.js";
import { CardType } from "./types.js";
export const resolvers = {
  Query: {
    sets: async () => await Set.find({}),
    cards: async (_, { id }) => {
      let st = await Set.findById(id);
      return st.cards;
    },
    // cards: async (_, { id }) => {
    //   let cd = await Card.where((c: CardType) => c.set === id);
    //   return cd;
    // },
  },
  Mutation: {
    addSet: async (_, { name }) => {
      let now = Date.now().toString();
      const newSet = new Set({
        name: name as String,
        createdAt: now,
        lastReading: now,
        cards: [],
      });
      await newSet.save();
      return newSet;
    },
    addCard: async (_, { question, answer, set }) => {
      let now = Date.now().toString();
      let result = await Set.updateOne(
        { _id: set },
        {
          $push: {
            cards: {
              question: question,
              answer: answer,
              createdAt: now,
              lastReading: now,
            },
          },
        }
      );
      if (result.acknowledged && result.modifiedCount === 1) {
        return await Set.findOne({ _id: set });
      }
    },

    editSet: async (_, { id, name }) => {
      let result = await Set.updateOne(
        { _id: id },
        {
          $set: {
            name: name,
          },
        }
      );
      if (result.acknowledged && result.modifiedCount === 1) {
        return await Set.findOne({ _id: id });
      }
    },
    editCard: async () => {},

    deleteSet: async () => {},
    deleteCard: async () => {},
  },
};
