"use strict"

const homeworkLoader=function(homeworkTableElement,homeworkJSONFile){
    
    function loadHomework(startDate){
        let xhr=new XMLHttpRequest();
        xhr.addEventListener("load", (e)=>{
            homeworkTableElement.appendChild(makeTable(xhr.response,startDate));
        });
        xhr.addEventListener("error",console.log);
        xhr.open("GET", homeworkJSONFile);
        xhr.responseType="json";
        xhr.send();
    };

    return {loadHomework:loadHomework};

};

function makeTable(arr,startDate){
    const tbody=document.createElement("tbody");
    arr.forEach((item, i)=>{
        let row=document.createElement("tr");
        let date=document.createElement("td");
        date.appendChild(document.createTextNode(week2Date(startDate,i)));
        let topic=document.createElement("td");
        topic.appendChild(document.createTextNode(item.topic));
        let ass=document.createElement("td");
        ass.appendChild(document.createTextNode(item.ass));
        row.appendChild(date);
        row.appendChild(topic);
        row.appendChild(ass);
        tbody.appendChild(row);
    });
    return tbody;
}


