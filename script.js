// login form (become a customer)

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('header').classList.add('active');
  }else{
    document.querySelector('header').classList.remove('active');
  };
};

// end of login form


// rregullimi i register dhe login ne login form
var x =document.getElementById("login");
var y =document.getElementById("register");
var z =document.getElementById("btn");

function register() {
  x.style.left="-400px";
  y.style.left="50px";
  z.style.left="110px";
}

function login() {
  x.style.left="50px";
  y.style.left="450px";
  z.style.left="0";
}
