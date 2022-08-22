//Global Varaible for currentDay div
var current = $("#currentDay");
// Moment.js
var currentDate = moment().format('MMMM Do YYYY');
var currentHour = moment().format('h:mm a');
// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");
//append date to div
function currentDay()
{
    current.append(currentDate);
}
//run to page
currentDay();

