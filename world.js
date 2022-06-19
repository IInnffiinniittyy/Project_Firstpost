





let dataSy =[

    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/AP22156296047195-1.jpg?impolicy=website&width=640&height=362",
      h1tag:"Sri Lankan government announces shut-down of government offices and schools from next week amid fuel crisis",
      ptag:"This comes only a day after Prime Minister Ranil Wickremesinghe said around four to five million of the country's 22 million population could directly be affected by food shortage"
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/AlabamaShooting_edit.jpg?impolicy=website&width=640&height=362",
      h1tag:"Gunman kills three seniors over potluck dinner at Alabama church",
      ptag:"Church members were spared further violence when one of them rushed the gunman, struck him with a chair and held him until police arrived"
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/rsz_000_32cp3fb.jpg?impolicy=website&width=640&height=362",
      h1tag:"UK PM Boris Johnson makes second trip to Ukraine's Kyiv since war began",
      ptag:"The visit came a day after the European Union's most powerful heads of state embraced Ukraine's bid to be accepted as a candidate for EU membership, nearly four months into the Russian invasion"
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/000_32CN8JD-Copy.jpg?impolicy=website&width=640&height=362",
      h1tag:"Explained: From drought to forest fires, how severe heatwaves have affected Europe",
      ptag:"The continent has endured five of its hottest summers since 1500, with temperatures reaching up to 47 degrees Celsius in some regions, leaving many dead."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/05/T-S-Tirumurti.jpg?impolicy=website&width=640&height=362",
      h1tag:"There cannot be 'double standards' on religiophobia, India at UN",
      ptag:"Tirumurti was speaking at a high-level event to make the celebration of the first anniversary of the International Day on Countering Hate Speech titled 'Role of education to address the root causes of hate speech and advance inclusion, non-discrimination, and peace'"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/FTA-1.jpg?impolicy=website&width=640&height=362",
      h1tag:"India, EU resume free trade talks after nine-year lull; first meet to be held on 27 June",
      ptag:"Earlier negotiations were left off in 2013 due to difference in the scope and expectations from the deal"

    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2021/02/Dogecoin-cryptocurrency-e1655546541221.jpg?impolicy=website&width=640&height=362",
      h1tag:"Elon Musk sued for $258 billion by Dogecoin investor for running 'pyramid scheme'; all you need to know",
      ptag:"According to an AFP report, Keith Johnson has claimed that since Musk began promoting Dogecoin, investors have lost about $86 billion"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Food-Crisis_edit.jpg?impolicy=website&width=640&height=362",
      h1tag:"Explained: How did Russia-Ukraine war trigger a food crisis?",
      ptag:"Together, Russia and Ukraine export nearly a third of the world's wheat and barley, more than 70 per cent of its sunflower oil and are big suppliers of corn"
      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/YouTube_Price_Video_Viral_640.jpg?impolicy=website&width=640&height=362",
      h1tag:"Watch: Flight attendant proposes to pilot girlfriend on a pride plane, video goes viral",
      ptag:"Rojas and Moncayo can be seen recalling their first meeting by talking over the telephone. As Moncayo accepts the proposal, the other cabin crew members and passengers are seen cheering for the couple and giving them a big round of applause."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/04/Sheikh-Hasina1.jpg?impolicy=website&width=640&height=362",
      h1tag:"Bangladesh PM Sheikh Hasina sends one metric tonne of mangoes as gift to President Kovind, PM Modi",
      ptag:"The relationship between Bangladesh and India has scaled new heights and the 'mango-hilsa diplomacy' is making the ties more gratifying, according to the mission statement"
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Hate-speech-640.jpg?impolicy=website&width=640&height=362",
      h1tag:"International Day for Countering Hate Speech: History, significance and all you need to know",
      ptag:"The devastating impact of hate speech has been further amplified by social media and other means of communication. If left unchecked, hate speech can lead to wide scale human rights violations, increase conflicts and upend peace and development measures."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/DonaldTrump_edit.jpg?impolicy=website&width=640&height=362",
      h1tag:"Donald Trump lashes out at 6 January committee as he teases plans for third presidential run",
      ptag:"Speaking to religious conservatives in Nashville, Trump blasted the committee's efforts as a 'theatrical production of partisan political fiction' and insisted he had done nothing wrong"      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Screenshot-640-27.jpg?impolicy=website&width=640&height=362",
      h1tag:"Google celebrates Romanian physicist Stefania Maracineanu’s 140th birth anniversary with this doodle",
      ptag:"Maracineanu then got into the Sorbonne University in Paris to complete her Ph.D in physics. She worked for four years at the Astronomical Observatory in Meudon after which she returned to Romania where she founded her homeland’s first laboratory for the study of radioactivity."

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/rsz_ap22169356746343_1.jpg?impolicy=website&width=640&height=362",
      h1tag:"Two including Sikh man killed as terrorists storm Kabul gurudwara; PM Modi condemns 'cowardly attack'",
      ptag:"Earlier, the Indian Ministry of External Affairs said that they were monitoring the situation in Kabul and added that the attack on Gurudwara Karte Parwan should be condemned in the strongest terms by all"
    },
    { 
      photo:"https://www.firstpost.com/world/international-picnic-day-2022-heres-how-to-celebrate-with-your-family-friends-amid-pandemic-10805911.html",
      h1tag:"International Picnic Day 2022: Here’s how to celebrate with your family, friends amid pandemic",
      ptag:"Since two years of the COVID-19 pandemic hit the world, people still live in fear to engage in outdoor activities or be part of a picnic or even attend a huge social gathering. "

      
    },
   
]



let chaildSy="chilSy"
let link= "opinion.html"

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
    A.innerText="WORLD"

    
    imdiv.append(A,h1,p)
    document.querySelector("#mainSy").append(avtar,imdiv)


})




console.log(document)