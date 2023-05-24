import { Set } from "./mongoose.js";
export const resolvers = {
    Query: {
        sets: async () => await Set.find({}),
        cards: async (_, { id }) => {
            let st = await Set.findById(id);
            return st.cards;
        },
    },
    Mutation: {
        addSet: async (_, { name }) => {
            let now = Date.now().toString();
            const newSet = new Set({
                name: name,
                createdAt: now,
                lastReading: now,
                cards: [],
            });
            await newSet.save();
            return newSet;
        },
        addCard: async (_, { question, answer, set }) => {
            let now = Date.now().toString();
            let result = await Set.updateOne({ _id: set }, {
                $push: {
                    cards: {
                        question: question,
                        answer: answer,
                        createdAt: now,
                        lastReading: now,
                    },
                },
            });
            if (result.acknowledged && result.modifiedCount === 1) {
                let st = await Set.findOne({ _id: set });
                return st.cards[st.cards.length - 1].question;
            }
        },
        editSet: async (_, { id, name }) => {
            let result = await Set.updateOne({ _id: id }, {
                $set: {
                    name: name,
                },
            });
            if (result.acknowledged && result.modifiedCount === 1) {
                return await Set.findOne({ _id: id });
            }
        },
        editCard: async (_, { question, answer, set, id }) => {
            let result = await Set.updateOne({ _id: set, "cards._id": id }, {
                $set: { "cards.$.question": question, "cards.$.answer": answer },
            });
            if (result.acknowledged && result.modifiedCount === 1) {
                return await Set.findOne({ _id: set });
            }
            return null;
        },
        deleteSet: async (_, { id }) => {
            let result = await Set.deleteOne({ _id: id });
            if (result.acknowledged && result.deletedCount === 1) {
                return await id;
            }
            return null;
        },
        deleteCard: async (_, { set, id }) => {
            let result = await Set.updateOne({ _id: set, "cards._id": id }, {
                $pull: { cards: { _id: id } },
            });
            if (result.acknowledged && result.upsertedCount === 1) {
                return id;
            }
            return null;
        },
    },
};
