//Global Varaible for currentDay div
var current = $("#currentDay");
//append date to div
function currentDay()
{
    var fullDate = new Date();
    var month = fullDate.getMonth();
    if(month === 0)
        month = "January";
    else if (month === 1)
        month = "February";
    else if (month === 2)
        month = "March";
    else if (month === 3)
        month = "April";
    else if (month === 4)
        month = "May";
    else if (month === 5)
        month = "June";
    else if (month === 6)
        month = "July";
    else if (month === 7)
        month = "August";
    else if (month === 8)
        month = "September";
    else if (month === 9)
        month = "October";
    else if (month === 10)
        month = "November";
    else 
        month = "December";
    var day = fullDate.getDate();
    var year = fullDate.getFullYear();
    console.log(month + " " + day + " " + year);
    current.append(month + " " + day + " " + year);
}
//run to page
currentDay();

