
//source: https://stackoverflow.com/questions/1184334/get-number-days-in-a-specified-month-using-javascript
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


date01 = new Date(2018, JUN, 19, 0, 0, 0, 0);
date02 = new Date(2018, DEC, 31, 0, 0, 0, 0);
date03 = new Date (2019, JAN, 1, 0, 0, 0, 0);
date04 = new Date(2019, FEB, 14, 0, 0, 0, 0);
date05 = new Date(2020, FEB, 1, 0, 0, 0, 0);

console.log("daysInMonth Date01, June 2018: " + daysInMonth(date01.getMonth(), date01.getFullYear()));// daysInMonth((date01.getMonth()) + 1, date01.getYear())); //daysInMonth(date01.getMonth(), date01.getYear()));
console.log("daysInMonth Date02, Dec 2018: " + daysInMonth(date02.getMonth(), date02.getFullYear()));
console.log("daysInMonth Date03, Jan 2019: " + daysInMonth(date03.getMonth(), date03.getFullYear()));
console.log("daysInMonth Date04, Feb 2019: " + daysInMonth(date04.getMonth(), date04.getFullYear()));
console.log("daysInMonth Date05, Feb 2020: " + daysInMonth(date05.getMonth(), date05.getFullYear()));



function daysInMonth (month, year) {
    //var n = month + 1;
   console.log(month); 
    //console.log(" (" + month + ", " + year +")");
    return new Date(year, month + 1, 0).getDate();
    
}