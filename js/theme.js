"use strict"

//Given today's date return theme CSS file path
const themeSetter=function () {
    const depth=(window.location.pathname.match(/\//g) || []).length;
    const dirPrefix = Array(depth).join("../"); //to get to the `root' dir
    const today=new Date();
    const thisYear = today.getFullYear();
    const holidayList = {
	    "newYear1": {"name": "new-year",
		             "date": new Date(thisYear, 0, 1),
		             "fore": 0,
		             "aft": 3},
	    "newYear2": {"name": "new-year",
		             "date": new Date(thisYear + 1, 0, 1),
		             "fore": 3,
		             "aft": 0},
	    //ad hoc patch for chinese new year. 
	    "springfestival":{"name": "spring-festival",
			              "date": new Date(2018, 1, 16),
			              "fore": 0,
			              "aft": 6},
	    "valentine": {"name": "214",
		              "date": new Date(thisYear, 1, 14),
		              "fore": 0,
		              "aft": 1},
	    "stpat": {"name": "st-patrick",
		          "date": new Date(thisYear, 2, 17),
		          "fore": 0,
		          "aft": 1},
	    "apr1": {"name": "apr1",
		         "date": new Date(thisYear, 3, 1),
		         "fore": 0,
		         "aft": 1},
	    "halloween": {"name": "halloween",
		              "date": new Date(thisYear, 9, 31),
		              "fore": 15,
		              "aft": 1},
	    "thanksgiving": {"name": "thanksgiving",
			             "date": getDateNthDay(new Date(thisYear,10,1),4,4),
			             "fore": 15,
			             "aft": 4},
	    "xmas": {"name": "xmas",
		         "date": new Date(thisYear, 11, 25),
		         "fore": 15,
		         "aft": 4}
    };
    
    function themeCSSPath() {
	    let str=theme ();
	    if (str===null) {
	        str="1";
	    }
	    return dirPrefix + "css/style-" + str + ".css";
    }

    function theme() {
	    const src = dirPrefix + "css/style1.css";
	    for (let h in holidayList) {
	        const start = new Date(holidayList[h] ["date"]);
	        start.setDate(start.getDate() - holidayList[h]["fore"]);
	        const end  = new Date(holidayList[h] ["date"]);
	        end.setDate(end.getDate() + holidayList[h] ["aft"]);
	        if (today >= start && today < end) {
		        return holidayList[h] ["name"];
	        }
	    }
	    return null;
    };
    return {theme:theme,
	        themeCSSPath:themeCSSPath};
};
