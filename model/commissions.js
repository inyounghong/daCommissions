'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommissionsSchema = new Schema({
    username: String,
    title: String,
    description: String,
    price: Number,
    categories: [String],
    link: String,
});

module.exports = mongoose.model('Commission', CommissionsSchema);
