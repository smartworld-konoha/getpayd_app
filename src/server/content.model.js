//title
//content
//type
//available_to
//reward
//date_end
//quizzes [
//{
//  question:
//  answers: []
//  correct_answer:
//} 
// company {
//   _id:
//   company_name:
//   email:
// }
// reference_link
// attachment_data
//]
//title
//content
//type
//available_to
//reward
//date_end
//quizzes [
//{
//  question:
//  answers: []
//  correct_answer:
//} 
// company {
//   _id:
//   company_name:
//   email:
// }
// reference_link
// attachment_data

var mongoose = require('mongoose');

var contentSchema = mongoose.Schema({
    title: String,
    content: String,
    type: String,
    available_to: Array,
    reward: Number,
    date_end: Date,
    quizzes: Array,
    company: Object,
    reference_link: String,
    attachment_data: String,
    date_created: Date,
});

var Content = mongoose.model('Content', contentSchema);

module.exports = Content;



var mongoose = require('mongoose');

var contentSchema = mongoose.Schema({
    title: String,
    content: String,
    type: String,
    available_to: Array,
    reward: Number,
    date_end: Date,
    quizzes: Array,
    company: Object,
    reference_link: String,
    attachment_data: String,
    date_created: Date,
});

var Content = mongoose.model('Content', contentSchema);

module.exports = Content;           
