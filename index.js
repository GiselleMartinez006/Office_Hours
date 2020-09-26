console.log("welcomex3")

var startTime = 10
var endTime = 1
var timezoneArray= ["PST", "MT", "CST", "EST"]

function timeZoneGenerator (time, parent){
       console.log(time)
       console.log(parent)
    for (var i = 0; i < 4 ; i++){

        var span = document.createElement("span")
        parent.appendChild(span)
        span.textContent= `${time+i > 12? 0 + (i-2): time+i}${time+i > 12 || time+i < 8? "pm": "am"} ${timezoneArray[i]} ${timezoneArray[i]=== "EST"? "": " / "}`
    
        console.log(time+i)
        console.log(time+i< 12? "am": "pm")
        console.log(timezoneArray[i])
    }
   }


var section = document.createElement("section")
document.body.append(section)


var heading = document.createElement("h1")
heading.id= "heading"
heading.textContent = "Office Hours @ Sundays"
section.append(heading)

var description = document.createElement("h3")
description.id = "description"
description.textContent = `
From `
timeZoneGenerator(startTime, description)
description.append(document.createElement("div"))
description.append("Until ")
timeZoneGenerator(endTime, description)
    // ${startTime}${startTime < 12? "am": "pm"} PST/
    // ${startTime+1}${startTime+1 < 12? "am": "pm"}  MT/
    // ${startTime+2}${startTime+2 < 12? "am": "pm"}  CST /
    // ${startTime+3}${startTime+3 < 12? "am": "pm"}  EST`
  

section.append(description)
