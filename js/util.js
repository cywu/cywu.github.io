"use strict"

// decouple this function
function week2Date(startDate,i) {
    //Given startDate and an integer i
    //return a string indicating the range of dates of the i-th week since startDate.
    //Example format 2017/02/08 -- 2017/02/14
    const date1= new Date(startDate);
    date1.setDate(date1.getDate()+i*7);
    const date2=new Date(startDate);
    date2.setDate(date2.getDate()+i*7+6);
    return date2String(date1,"/")+ " -- " + date2String(date2,"/");

}

function date2String(dd,z) {
    z = z|| ""; 
    return pad(dd.getFullYear(),4,'0') + z + pad((dd.getMonth()+1),2,'0') + z + pad(dd.getDate(),2,'0'); 
}

function getDateNthDay(date, i, d) {
    // get date of i-th d-day of the month specified in date
    const date1 = new Date(date);
    date1.setDate(1); //first day of the month
    const dayDate1 = date1.getDay();
    //find i-th d-day
    let dd = d - dayDate1 + 1 + i * 7;
    if (dayDate1 <= d) {
	dd = dd - 7;
    }
    //compute the total number of days in the given month
    const lastDate = new Date(date1);
    lastDate.setMonth(lastDate.getMonth() + 1, 0);
    //test if dd is out of range
    if (dd < 1 || dd > lastDate.getDate()) {
	return null;
    } else {
	date1.setDate(dd)
	return date1;
    }
}


function pad(n, width, z) {
    //pads a number to specified width with given character z.
    //number not trimmed if length larger than width.
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
