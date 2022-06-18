document.querySelector("button").addEventListener("click",signupFun);
let userdata = [];


function signupFun(event){
 
    let userName = document.querySelector("#name").value;
    let userEmail = document.querySelector("#email").value;
    let userPass = document.querySelector("#pass").value;
    let userObj = {name: userName,email: userEmail,password: userPass};

    if( userName == "" || userEmail == "" || userPass == ""){
        alert("Please Enterd your details")
    } else if( userPass < 6){
        alert("Please Enterd min 6 digit")
    } else{
            userdata.push(userObj);
            finalOutput(userdata);
            localStorage.setItem("localUserData",JSON.stringify(userdata))
            console.log(userdata)
       }
     

}

function finalOutput(userData){
    document.querySelector("#signup").innerHTML = "";   
    userdata.forEach(function(elem){


     let div = document.createElement("div");
     div.setAttribute("id","heading")
     let h3 = document.createElement("h3");
     h3.innerText = "Log In";
     div.append(h3); 

      let label1 = document.createElement("label");
      label1.innerText = "Email";
      let input1 = document.createElement("input");
      input1.setAttribute("id","loginEmail")
      input1.setAttribute("placeholder","Enter your Email")

      let label2 = document.createElement("label");
      label2.innerText = "Password";
      let input2 = document.createElement("input");
      input2.setAttribute("placeholder","Enter password")
      input2.setAttribute("id","loginPass")

      let button = document.createElement("button");
      button.setAttribute("id","loginbtn")
      button.innerText = "LOGIN"
      document.querySelector("#signup").append(div,label1,input1,label2,input2,button);
      document.querySelector("#signup").style.height = "400px";

      console.log(elem.password)

      document.querySelector("#loginbtn").addEventListener("click",loginFun);
      function loginFun(event){

             filledEmail = document.querySelector("#loginEmail").value;
             filledPass = document.querySelector("#loginPass").value;  

             if( filledEmail == "" || filledPass == ""){
                alert("Please fill Your Email and Password")
             } else {
                check(filledEmail,filledPass)  
             }
                   
      }


      function check(email,pass){
        if( filledEmail == elem.email && filledPass == elem.password ){
            document.querySelector("body").innerHTML = "";
            alert( "login successful")
            let h2 = document.createElement("h2");
            h2.innerText = "Welcome to Masai family"
            document.querySelector("body").append(h2);

         } else {
            alert("wrong credentials")
         }
      }
      
    
    })
}