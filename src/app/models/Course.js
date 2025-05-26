

const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');

// mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, Maxlength: 255},
    description: {type: String, Maxlength: 600},
    image: {type:String, Maxlength:255},
    videoId: {type:String, Maxlength: 255},
    level: {type: String, Maxlength: 255},
    slug: {type: String, slug: 'name',unique: true}

},{timestamps: true});

module.exports = mongoose.model('Course', Course);


