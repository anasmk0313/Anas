
// Fixed Top
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("menuBar");
var fixed = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= fixed) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
}

// Changing Active Class
var listContainer = document.getElementById('menuBar');
var lists = listContainer.getElementsByClassName('menu-item');
for(i = 0; i < lists.length; i++){
  lists[i].addEventListener("click", function(){
  var current = document.getElementsByid("active");
  current[0].id = current[0].id.replace("active", "");
  this.id += " active";
  });
}

let profile = document.querySelector("#profile");
let experience = document.querySelector("#experience");
let ability = document.querySelector("#ability");
let project = document.querySelector("#project");
let contact = document.querySelector("#contact");

window.addEventListener("scroll",()=>{
  var windo = window.pageYOffset;
  if(experience.offsetTop <= windo && ability.offsetTop > windo){
    console.log("experience");
    document.querySelector(".experience").setAttribute("id","active");
    document.querySelector(".ability").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".profile").removeAttribute("id","active");
  }
  else if(ability.offsetTop <= windo && project.offsetTop > windo){
    console.log("ability");
    document.querySelector(".experience").removeAttribute("id","active");
    document.querySelector(".ability").setAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".profile").removeAttribute("id","active");
  }
  else if(project.offsetTop <= windo && contact.offsetTop > windo){
    console.log("project");
    document.querySelector(".experience").removeAttribute("id","active");
    document.querySelector(".ability").removeAttribute("id","active");
    document.querySelector(".project").setAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".profile").removeAttribute("id","active");
  }
  else if(contact.offsetTop <= windo){
    console.log("contact");
    document.querySelector(".experience").removeAttribute("id","active");
    document.querySelector(".ability").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").setAttribute("id","active");
    document.querySelector(".profile").removeAttribute("id","active");
  }
  else{
    console.log("profile");
    document.querySelector(".experience").removeAttribute("id","active");
    document.querySelector(".ability").removeAttribute("id","active");
    document.querySelector(".project").removeAttribute("id","active");
    document.querySelector(".contact").removeAttribute("id","active");
    document.querySelector(".profile").setAttribute("id","active");
  }
});

window.addEventListener('load', age());

function age(){
  var date = new Date();
  var year = date.getFullYear();
  var age = year - 1996;
  document.getElementById('age').innerHTML = age;
}
