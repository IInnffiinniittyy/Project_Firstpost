document.querySelector("button").addEventListener("click",loginFun);
function loginFun(event){
    event.preventDefault()
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value
    if( email == "" || pass == ""){
        alert("Please Fill Your Email and Password")

    }else{
        window.location.href = "navbar.html"

    }

}