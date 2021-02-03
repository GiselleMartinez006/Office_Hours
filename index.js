var div = document.getElementsByClassName("announcements")[0]

console.log(div)


var announcements = [
  // {title:"Announcement 1", description: "blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blueblue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue "
  // },
  // {title:"Announcement 2", description: "blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue "
  // },
  // {title:"Announcement 2", description: "blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue "
  // },
  // {title:"Announcement 2", description: "blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue "
  // },
  // {title:"Announcement 2", description: "blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue "
  // },
  // {title:"Announcement 2", description: "blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue blue "
  // }

]

if (announcements.length === 0) {
//  div.style.background = "red"
 div.textContent = "No Announcements for these days..."
 
    
} else{
for (var i = 0; i < announcements.length; i++){
  // ann stands for annoucement
  var annDiv = document.createElement("div")
  div.append(annDiv)
    var h3 = document.createElement('h3')
    h3.textContent = announcements[i].title
    annDiv.append(h3)
    h3.style.margin = 0;

    var p = document.createElement('p')
    p.textContent = announcements[i].description
    annDiv.append(p)
    p.style.fontSize = "0.7em"
    p.style.margin = 0;
    p.style.wordWrap = ""

}






}