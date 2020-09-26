console.log("welcomex3")

var startTime = 10

for (var i = 0; i < 3 ; i++){
    console.log(startTime+i)
    console.log(startTime+i< 12? "am": "pm")
}

var section = document.createElement("section")
document.body.append(section)


var heading = document.createElement("h1")
heading.textContent = "Office Hours @ Sundays"
section.append(heading)

var description = document.createElement("h3")
description.textContent = `
From ${startTime}${startTime < 12? "am": "pm"} PST/
     ${startTime+1}${startTime+1 < 12? "am": "pm"}  MT/
     ${startTime+2}${startTime+2 < 12? "am": "pm"}  CST /
     ${startTime+3}${startTime+3 < 12? "am": "pm"}  EST`



section.append(description)
