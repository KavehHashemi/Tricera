export const typeDefs = `#graphql
  type Set {
    id:ID
    owner:String
    name:String
    cards:[Card]
    lastReading:String
    createdAt:String
  }

  type Card {
    id:ID
    question:String
    answer:String
    lastReading:String
    history:[Boolean]
    createdAt:String
  }

  type Query {
    sets(userId:ID):[Set]
    cards(id:ID):[Card]
    # introduction(intro:String):String  
  }

  type Mutation {
        addSet(name:String,owner:String):Set
        addCard(question:String,answer:String,set:String,createdAt:String,lastReading:String):Card

        editSet(id:ID,name:String):Set
        editCard(set:ID,question:String,answer:String,id:ID):Card

        deleteSet(id:ID):ID
        deleteCard(set:ID, id:ID):ID
    }
`;
