console.log("welcomex3")
document.body.addEventListener("dragstart", ()=>{
  console.log("dragging? ")
})
console.log(document.getElementsByTagName("main")[0].className)

  if (document.getElementsByTagName("main")[0].className === "officehours"){
    var timezoneArray= ["PST", "MT", "CST", "EST"]

    var sundayStartTime = 11
    var sundayEndTime = 13
    var sundayLinkId= "743 049 914"

    var saturdayStartTime = 18
    var saturdayEndTime = 20
    var saturdayLinkId= "652 320 250"
    
    function timeZoneGenerator (time, parent){
          
           console.log(parent)
        for (var i = 0; i < 4 ; i++){
    console.log("time", time)
    console.log( "i", i)
            var span = document.createElement("span")
            parent.appendChild(span)
            span.textContent= `${time+i > 12? 0 + ((time+i)-12): time+i}${time+i >= 12 ? "pm": "am"} ${timezoneArray[i]} ${timezoneArray[i]=== "EST"? "": " / "}`
        
            console.log("time+i",time+i)
            console.log(time+i< 12? "am": "pm")
            console.log(timezoneArray[i])
        }
       }
    
function renderLabel(day, startTime, endTime, linkId) {var section = document.createElement("section")
document.getElementsByTagName("main")[0].append(section)

var div = document.createElement("div")
section.append(div)
var heading = document.createElement("h1")
heading.id= "heading"
heading.textContent = "Office Hours @ " + day
div.append(heading)

var description = document.createElement("h3")
description.id = "description"
description.append("From: ")
timeZoneGenerator(startTime, description)
description.append(document.createElement("br"))

description.append("Until: ")
timeZoneGenerator(endTime, description)
description.append(document.createElement("br"))

description.append(`Meeting ID: ${linkId}`)

    // ${startTime}${startTime < 12? "am": "pm"} PST/
    // ${startTime+1}${startTime+1 < 12? "am": "pm"}  MT/
    // ${startTime+2}${startTime+2 < 12? "am": "pm"}  CST /
    // ${startTime+3}${startTime+3 < 12? "am": "pm"}  EST`
  

div.append(description)}

renderLabel("Saturday", saturdayStartTime, saturdayEndTime, saturdayLinkId)
renderLabel("Sunday", sundayStartTime, sundayEndTime, sundayLinkId)
   } 

   if (document.getElementsByTagName("main")[0].className === "contacts"){
   var academicConsultantsInfo = [{name:"Gary Fishback", phone:"(940)-536-3370", slackUsername:"Gary Fishback", "email": "gary.fishback@bryanuniversity.edu", link:"https://academicassistance.as.me/?calendarID=3737347"}, 
  {name:"Giselle Martinez-Sanchez", phone:"(786)-265-8870", slackUsername:"Giselle Martinez-Sanchez", email: "giselle.sanchez@bryanuniversity.edu", link: "https://academicassistance.as.me/schedule.php?appointmentType=12301095"}]
    // Gary Fishback Contact Info:  // Phone: (940)-536-3370    // Slack Username: Gary Fishback    // E-mail: gary.fishback@bryanuniversity.edu    // Book a session at: https://academicassistance.as.me/?calendarID=3737347 (Links to an external site.)         // Giselle Martinez-Sanchez Contact Info:    // Phone: (786)-265-8870    // Slack Username: Giselle Martinez-Sanchez    // E-mail: giselle.sanchez@bryanuniversity.edu     // Book a session at: Link
    
    
    function renderLabel(name, phone, slack, email, link) {var section = document.createElement("section")
    document.getElementsByTagName("main")[0].append(section)
    
    var div = document.createElement("div")
    section.append(div)
    var heading = document.createElement("h1")
    heading.id= "heading"
    heading.textContent = name;
    div.append(heading)
    
    var description = document.createElement("h3")
    description.id = "description"
    description.append("Phone: " + phone)
    description.append(document.createElement("br"))
    
    description.append("Slack Username: " + slack)
    description.append(document.createElement("br"))
    
    var span = document.createElement("span")
    span.append(`Email: ${email}`)
    description.append(span,document.createElement("br"))
    
    var a = document.createElement("a")
    a.href = link
    a.textContent = "CLICK ME TO BOOK A SESSION"
    description.append(a)
    a.style.color = "red"
console.log(name, phone, slack, email, link)
      
    
    div.append(description)}
    academicConsultantsInfo.map(consultant => {
      renderLabel(consultant.name, consultant.phone, consultant.slackUsername ,consultant.email,consultant.link)
    })
// for (let i = 0; i < academicConsultantsInfo.length; i++){}

   }