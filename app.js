var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function chekUser(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function checkLogin()
{
    if(localStorage.login=="true")
    {
        window.location.href = "index.html";
    }
    else if(localStorage.login=="false")
    {
        window.location.href = "Dashboard.html";
    }
}