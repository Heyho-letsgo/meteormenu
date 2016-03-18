Recipes = new Mongo.Collection('recipes');

Recipes.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, ddoc){
        return !!userId;
    }
});


Ingredient = new SimpleSchema({
    name: {
        type: String
    },
    amount: {
        type: String 
    }
})


RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: "name"
    },
    desc: {
        type: String,
        label: "Description"
    },
    ingredients: {
        type: [Ingredient]
    },
    inMenu: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
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

Meteor.methods({
    toggleMenuItem: function(id, currentState){
        Recipes.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    }
});




Recipes.attachSchema(RecipeSchema);
