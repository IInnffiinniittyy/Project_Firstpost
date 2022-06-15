// we white here health.js






let dataSy =[

    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/02/Pfizer.jpg?impolicy=website&width=640&height=362",
      h1tag:"As COVID-19 cases rise, vaccines play vital role to prevent mass hospitalization, adverse outcomes",
      ptag:"Vaccines play a crucial role in preventing infection, hospitalizations, and adverse outcomes which cause deaths "

     
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2021/11/BTS.jpeg?impolicy=website&width=640&height=362",
      h1tag:"Explained: Why did BTS go on a ‘hiatus’? The phenomenon of boy bands breaking up and why it is so common",
      ptag:"Boy bands, at least the ones that are immensely popular and have a massive fan base, are known to either disband or go on an indefinite ‘hiatus’ - be it One Direction, The Jonas Brothers, Backstreet Boys or NSYNC."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/01/Brahmastra.jpg?impolicy=website&width=640&height=362",
      h1tag:"Brahmāstra Trailer: Vertiginously Vibrant",
      ptag:"Brahmāstra looks like something Steven Spielberg would create if he was Raj Kapoor."
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2020/07/IISc-Bangalore_-Facebook_640.jpg?impolicy=website&width=640&height=362",
      h1tag:"Head-on | India must develop its own methodology to rank global institutions",
      ptag:"It is time India stopped being beholden to how others see us and start telling others how we see them"
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Pakistan1.jpg?impolicy=website&width=640&height=362",
      h1tag:"Pakistan: Where democracy and political power flow from the barrel of a gun",
      ptag:"As former President Gen Pervez Musharraf fights for his life, a look at the history of Pakistan where democracy often worked under the guidance of the military"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/05/Sonia-Gandhi-and-Rahul-Gandhi1.jpg?impolicy=website&width=640&height=362",
      h1tag:"National Herald case: Rahul Gandhi, his mother and the Al Capone moment",
      ptag:"Even now, after eight years of the Modi government, and several cases actually filed, on Gandhis and Vadras, nobody seriously believes they can actually be sent to jail"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/tree2.jpg?impolicy=website&width=640&height=362",
      h1tag:"Trees of Peace is a haunting little film about women that outstretches its own scale and size",
      ptag:"Trees of Peace looks like a small film but aspires to big things, some of which it achieves by the sheer quality of its pithiness with words."

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/05/wheat2.jpg?impolicy=website&width=640&height=362",
      h1tag:"Not just Vishwaguru, but also Annapurna: The biggest lesson for India from the Ukraine war",
      ptag:"India’s most important learning from the war must be that a world of food shortage is dawning, and its agriculture must play a critical role in India "

     

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/640-x-363-2022-06-14T175401.536.jpg?impolicy=website&width=640&height=362",
      h1tag:"Munawar Faruqui Mocks Justin Bieber's Facial Paralysis: The Sorry State Of Woke Indian Comedians",
      ptag:"Munawar Faruqui chose to take a clever (or so he thought) jibe at Justin Bieber’s serious condition"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Bulldozer-demolishes-construction-of-the-Kanpur-violence-chief.jpg?impolicy=website&width=640&height=362",
      h1tag:"The state cannot let itself be bullied: Bulldozers raise cost of participating in street violence",
      ptag:"Those in power have a duty to safeguard our streets. And they seem to have found an answer in the bulldozer, which imposes a civil penalty that drastically raises the cost of participating in street violence"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2021/03/Xi-640.jpg?impolicy=website&width=640&height=362",
      h1tag:"Ahead 20th Congress of Chinese Communist Party, all is not well in the Kingdom of Xi",
      ptag:"There is no doubt that less than six months before the crucial 20th Congress, which should see Xi Jinping ‘re-elected’ for five years, all is not smooth in China"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/Prime-Minister-Narendra-Modi1.jpg?impolicy=website&width=640&height=362",
      h1tag:"How Prophet row challenges Narendra Modi’s carefully-crafted foreign policy in West Asia",
      ptag:"On issues of Islam, particularly with reference to the Quran and Prophet Mohammed, most if not all 57 members of the Organisation of Islamic Countries stay together"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/01/economy.jpg?impolicy=website&width=640&height=362",
      h1tag:"How Modi government pushes the pedal on India’s growth story while reining in inflation",
      ptag:"India’s 8.7 per cent GDP growth in FY22 is a glowing testimony to Modinomics and how Prime Minister Narendra Modi has been able to navigate India's powerful growth story into a sustainably stronger orbit"

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/640-x-363-2022-06-13T150554.394.jpg?impolicy=website&width=640&height=362",
      h1tag:"Two poetry collections ‘Auguries of a Minor God’ and ‘Woman by the Door’ test the limits of liminality in their verses",
      ptag:"While Nidhi Zak/Aria Eipe’s work triumphs the experimental, Kashiana Singh’s poetic universe reflects how love, loss, and longing make an unforgettable South Asian reality."

      
    },
    { 
      photo:"https://images.firstpost.com/wp-content/uploads/2022/06/nupursharma.jpg?impolicy=website&width=640&height=362",
      h1tag:"From Gyanvapi to Nupur Sharma: A saga of double-standards and selective liberalism",
      ptag:"It's all right to abuse Hinduism and Hindu beliefs, but not all right to question any other religion, even if you are only quoting from their holy texts"

      
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
    A.innerText="OPINION"

    
    imdiv.append(A,h1,p)
    document.querySelector("#mainSy").append(avtar,imdiv)


})




console.log(document)
