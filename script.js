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

var eventEntered;
var whichHour;

//append date to div
function currentDay()
{
    current.append(currentDate);
}
//run to page
currentDay();

//anything already in local storage print to rows
function printSaves() {

    var print9 = JSON.parse(localStorage.getItem("09:00 am"));
    nineAm.val(print9);
  
    var print10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(print10);
    
    var print11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(print11);
    
    var print12 = JSON.parse(localStorage.getItem("12:00 pm"))
    twelvePm.val(print12);
    
    var print1 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(print1);
    
    var print2 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(print2);
    
    var print3 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(print3);
   
    var print4 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(init4);
    
    var print5 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(print5);
    
    var print6 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(print6);
    
    var print7 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(print7);
  } 

  // Event listener to add items to localStorage
  $(".saveBtn").on("click", function(){
    //value entered into text box
    eventEntered = $(this).siblings(".form-control").val().trim();
    //which hour text box it was entered into
    whichHour = $(this).siblings(".input-group-prepend").text().trim();
    //enter into local storage
    localStorage.setItem(whichHour, JSON.stringify(eventEntered));
  })

  printSaves();