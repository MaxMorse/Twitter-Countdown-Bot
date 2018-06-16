
//source: https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
/*return value constants*/
const PAST_YEAR = -2;
const PAST_MONTH = -3;
/*month constants*/

const JAN = 0;
const FEB = 1;
const MAR = 2;
const APR = 3;
const MAY = 4;
const JUN = 5;
const JUL = 6;
const AUG = 7;
const SEP = 8;
const OCT = 9;
const NOV = 10;
const DEC = 11;

function Countdown(name, date) {
    this.name = name;
    this.date = date; 

}

pokemon_lets_go = new Countdown("Pokemon Let's Go Pikachu and Pokemon Let's Go Eevee", new Date(2018, NOV, 18));
super_smash_bros_ultimate = new Countdown("Super Smash Bros Ultimate", new Date(2018, DEC, 07));

/*
//console.log("name: " + pokemon_lets_go.name + "; date: " + pokemon_lets_go.date);
//console.log("month: " + pokemon_lets_go.date.getMonth());
console.log("Days in month Pokemon: " + daysInMonth( pokemon_lets_go.date.getMonth(), pokemon_lets_go.date.getFullYear()));
*/
today = new Date();
date0 = new Date(2018, NOV, 18);
date5 = new Date(2018, DEC, 07);
date1 = new Date(2018, JUN, 16); //today
date2 = new Date(2018, JUN, 02); //earlier this month
date3 = new Date(2018, FEB, 14); //earlier this year
date4 = new Date(2019, MAY, 03);
date6 = new Date(2017, JUL, 4); 
var dates = [date0, date1, date2, date3, date4, date5, date6]
for (var i = 0; i < dates.length; i++){
    console.log(dates[i]);
    var r = validateYear(today.getFullYear(), dates[i].getFullYear() );

    switch(r) {
        case -1:
          console.log('Date Already Happened');
          break;
        case 0:
           console.log('same year');
           //validate month
           //validateYear
          
   
           break;
        case 1:
           console.log('future year');
           //how many years
           
           break;
        default:
          console.log('error');
           return -4;
    }

}



function monthsUntil(startDate, endDate) {
    var n = -4;
    //if same year
   var return_value = validateYear(startDate.getFullYear(), endDate.getFullYear());
    return n;

}

function validateYear(startYear, endYear) {
    if (startYear > endYear ) {
        //console.log("Past Year");
        return -1;
    }
    
    if(startYear == endYear) {
        //console.log("same year");
        return 0;
    }
    else if(startYear < endYear ){
        //console.log("future year");
        return 1;
    }
    return -4;

}
function daysInMonth (month, year) {
    //var n = month + 1;
   console.log(month); 
    //console.log(" (" + month + ", " + year +")");
    return new Date(year, month + 1, 0).getDate();
    
}
//testDaysInMonth();
function testDaysInMonth() {
    date01 = new Date(2018, NOV, 19, 0, 0, 0, 0);
    date02 = new Date(2018, DEC, 31, 0, 0, 0, 0);
    date03 = new Date (2019, JAN, 1, 0, 0, 0, 0);
    date04 = new Date(2019, FEB, 14, 0, 0, 0, 0);
    date05 = new Date(2020, FEB, 1, 0, 0, 0, 0);

    console.log("daysInMonth Date01, June 2018: " + daysInMonth(date01.getMonth(), date01.getFullYear()));// daysInMonth((date01.getMonth()) + 1, date01.getYear())); //daysInMonth(date01.getMonth(), date01.getYear()));
    console.log("daysInMonth Date02, Dec 2018: " + daysInMonth(date02.getMonth(), date02.getFullYear()));
    console.log("daysInMonth Date03, Jan 2019: " + daysInMonth(date03.getMonth(), date03.getFullYear()));
    console.log("daysInMonth Date04, Feb 2019: " + daysInMonth(date04.getMonth(), date04.getFullYear()));
    console.log("daysInMonth Date05, Feb 2020: " + daysInMonth(date05.getMonth(), date05.getFullYear()));
}
