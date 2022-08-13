let toggle = document.getElementById("toggle")
let password = document.getElementById("password")
toggle.addEventListener("click",function(){
    if(password.type === "password"){
        password.setAttribute("type", "text")
        toggle.classList.add("hide")
    }else{
        password.setAttribute("type", "password")
        toggle.classList.remove("hide")
    }
})
let lowercase = document.getElementById("lower")
let uppercase = document.getElementById("upper")
let numbercase = document.getElementById("number")
let specialcase = document.getElementById("special")
let contantcase = document.getElementById("contant")


password.addEventListener("keyup",function(){
    const lower = /[a-z]/g
    const upper = /\b[A-Z]/g
    const number = /[0-9]/g
    const special = /[!@#$%^&*]/g
    const contant = /.{8}/g

    if(lower.test(password.value)){
        lowercase.classList.add("lower")
    }else{
        lowercase.classList.remove("lower")
    }
    if(upper.test(password.value)){
        uppercase.classList.add("upper")
    }else{
        uppercase.classList.remove("upper")
    }
    if(number.test(password.value)){
        numbercase.classList.add("number")
    }else{
        numbercase.classList.remove("number")
    }
    if(special.test(password.value)){
        specialcase.classList.add("special")
    }else{
        specialcase.classList.remove("special")
    }
    if(contant.test(password.value)){
        contantcase.classList.add("contant")
    }else{
        contantcase.classList.remove("contant")
    }
})