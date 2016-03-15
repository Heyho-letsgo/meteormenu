Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId,doc){
        return !!userId;
    }
});






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
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date() 
        },
        autoform: {
            type: "hidden"
        }
    }
});

Recipes.attachSchema(RecipeSchema);