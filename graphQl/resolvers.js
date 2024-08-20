const { Query } = require("mongoose");
const Recipe = require("../model/recipe");

module.exports = {
  Query: {
    async recipe(_, {ID}) { 
      
      return Recipe.findById(ID);
    },
    async getRecipes(_, args) {
      return await Recipe.find().sort({ createdAt: -1 }).limit(args.amount);
    },
  },
  Mutation: {
    async createRecipe(_, { recipeInput: { name, description } }) {
      const createdRecipe = new Recipe({
        name: name,
        description: description,
      });

      const res = await createdRecipe.save();

      return {
        id: res.id,
        ...res._doc,
      };
    },

    async deleteRecipe(_, { ID }) {
      const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
    async editRecipe(_, { ID, recipeInput: { name, description } }) {
      const wasEdit = (
        await Recipe.updateOne(
          { _id: ID },
          { name: name, description: description }
        )
      ).modifiedCount;
      return wasEdit;
    },
  },
};
