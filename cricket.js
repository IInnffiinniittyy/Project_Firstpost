// we white here health.js






let dataSy =[

    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/WI-vs-BAN-1st-Test-Day-3.jpg?impolicy=website&width=640&height=362",
      h1tag:"West Indies Vs Bangladesh Live cricket score and Update",
      ptag:"Live cricket score West Indies vs Bangladesh, 1st Test ball by ball Commentary, Live update and scoreboard, watch Full Live streaming online of today cricket Match WI vs Ban"
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/02/Harmanpreet-Kaur-640_Twitter-@ICC_opt.jpg?impolicy=website&width=640&height=362",
      h1tag:"Sri Lanka tour great opportunity to build team: Harmanpreet Kaur",
      ptag:"Mithali Raj has retired from all forms of the game, while experienced pacer Jhulan Goswani is not travelling to the island nation."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/03/Ramesh-Powar-640.jpg?impolicy=website&width=640&height=362",
      h1tag:"Ramesh Powar stresses on building all-condition team to win elusive world title",
      ptag:"India women's cricket team head coach Ramesh Powar on Saturday stressed on the need to build a strong squad that can play in all conditions in their pursuit of winning an elusive World Cup title."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Jos-Buttler-ENGvNED-640_Twitter-@ICC.jpg?impolicy=website&width=640&height=362",
      h1tag:"Watch: England smash 26 maximums against Netherlands in 1st ODI, achieve new world record",
      ptag:"Most of the maximums came from the willow of Buttler. The right-handed batter remained unbeaten at 162 off 70 deliveries and slammed as many as 14 sixes and 7 boundaries."
    },
    { 
      photo:"https://www.firstpost.com/wp-content/uploads/2022/02/Harmanpreet-Kaur-640_Twitter-@ICC_opt.jpg?impolicy=website&width=640&height=362",
      h1tag:"Sri Lanka tour great opportunity to build team: Harmanpreet Kaur",
      ptag:"Mithali Raj has retired from all forms of the game, while experienced pacer Jhulan Goswani is not travelling to the island nation."

      
    },
    { 
      photo:"https://www.firstpost.com/wp-content/uploads/2022/06/IND-vs-SA-5th-T20I-640.jpg?impolicy=website&width=640&height=362",
      h1tag:"India vs South Africa Live Streaming, How to watch Today Ind vs SA Cricket match, Score and update, match live coverage",
      ptag:"Ind Vs SA Live streaming of today Match , check out match score and updates, broadcast-timing and tv channel"

      
    },
    { 
      photo:"https://www.firstpost.com/wp-content/uploads/2022/06/Jos-Buttler-ENGvNED-640_Twitter-@ICC.jpg?impolicy=website&width=640&height=362",
      h1tag:"Watch: England smash 26 maximums against Netherlands in 1st ODI, achieve new world record",
      ptag:"Most of the maximums came from the willow of Buttler. The right-handed batter remained unbeaten at 162 off 70 deliveries and slammed as many as 14 sixes and 7 boundaries."

      
    },
    { 
      photo:"https://www.firstpost.com/wp-content/uploads/2022/06/Jos-Buttler-England-Netherlands-1st-ODI-Twitter-@englandcricket-640.jpg?impolicy=website&width=640&height=362",
      h1tag:"‘Highlights is the full 50 overs’ – Twitter erupts as England smash record 498 against Netherlands in ODI",
      ptag:"It was the first game of the three-match ODI series and batting first, England’s three batters Jos Buttler, Phil Salt and Dawid Malan scored centuries, while Liam Livingstone flew to 66 off just 22 balls as they powered England to 498 for 4 in 50 overs."

      
    },
   
]



let chaildSy="chilSy"
let link= "./health.html"

dataSy.forEach(function (el, index, arr) {

    let avtar = document.createElement("img")

    avtar.setAttribute("src",el.photo)

    let imdiv=document.createElement("div")
    imdiv.setAttribute("class" , chaildSy)

    let A=document.createElement("a")
    A.setAttribute("href" , link)
    let h1=document.createElement("h1")
    let p=document.createElement("p")
   
    h1.innerText = el.h1tag
    p.innerText = el.ptag

    // h3.innerText=""
    A.innerText="HEALTH"

    
    imdiv.append(A,h1,p)
    document.querySelector("#mainSy").append(avtar,imdiv)


})




console.log(document)
