const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    name: { type: String },

    location: { type: String },

    timestamps: true,

    date: { type: Date },

    preparationTips: { type: String },

    featured: {type: Boolean, default: false}

});



const Event = model('event', eventSchema)



module.exports = Event;

