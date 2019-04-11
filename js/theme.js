//Given today's date return theme CSS file path
var themeSetter=function () {
    var depth=(window.location.pathname.match(/\//g) || []).length;
    var dirPrefix = Array(depth).join("../"); //to get to the `root' dir
    var today=new Date();
    var thisYear = today.getFullYear();
    var holidayList = {
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
    
    var themeCSSPath = function() {
	    var str=this.theme ();
	    if (str===null) {
	        str="1";
	    }
	    return dirPrefix + "css/style-" + str + ".css";
    };

    var theme = function () {
	    var src = dirPrefix + "css/style1.css";
	    for (h in holidayList) {
	        var start = new Date(holidayList[h] ["date"]);
	        start.setDate(start.getDate() - holidayList[h]["fore"]);
	        var end  = new Date(holidayList[h] ["date"]);
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






