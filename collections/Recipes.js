Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    author: {
        type: String,
        label: "Auhor",
        autoValue: function() {
            return this.userId
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        }
        
    }
});

Recipes.attachSchema(RecipeSchema);