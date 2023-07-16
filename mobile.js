// document.getElementById("browse_all").remove();
// document.getElementById("sortByrel").remove();
// document.getElementById("right_most").remove();

let a2=document.getElementById("third_se");
a2.outerHTML=`<div class="with_arrow"><div class="left_arrow">&#8249;</div>${a2.outerHTML}<div class="right_arrow">›</div></div>`

let a1123=document.getElementById("SecondFourth");
a1123.outerHTML=`<div class="with_arrow left_arrow1"><div class="left_arrow" >&#8249;</div>${a1123.outerHTML}<div class="right_arrow">›</div></div>`

let pos=0;
let count=0;
let a112;
let i1=0;

document.getElementsByClassName("right_arrow")[0].addEventListener("click",set123);
document.getElementsByClassName("right_arrow")[1].addEventListener("click",set123);
document.getElementsByClassName("left_arrow")[0].addEventListener("click",reset123);
document.getElementsByClassName("left_arrow")[1].addEventListener("click",reset123);
let set1=0;
let i12=0;
function set123(event){
   set1=event.target.previousElementSibling.firstElementChild.getAttribute("class");
   if(set1=="cardsbc"){
    document.getElementsByClassName("left_arrow")[0].addEventListener("click",reset123);
    document.getElementsByClassName("left_arrow")[0].style.color="black";
    i1++;
   }
   else{
      document.getElementsByClassName("left_arrow")[1].addEventListener("click",reset123);
      document.getElementsByClassName("left_arrow")[1].style.color="black";
      i12++;
   }
    a112 = setInterval(move,1);
   }

   let pos1=0,pos2=0;
   let count1=0;
   function move(){
      if(set1=="cardsbc"){
         console.log(set1);
         pos1=pos1-0.824;
         pos=pos1;
         count++;
      }
      else{
      console.log(set1);
    pos2=pos2-0.894;
    pos=pos2;
    count1++;
   }
 for(let i=0;i<document.getElementsByClassName(set1).length;i++){
    document.getElementsByClassName(set1)[i].style.translate=`${pos}vw`;
 }
 if(count==100 && set1=="cardsbc"){
    console.log(pos1);
    clearInterval(a112);
    count=0;
    if(Math.round(((document.getElementsByClassName(set1).length)/2)-1)==i1){
        document.getElementsByClassName("right_arrow")[0].style.color="grey";
        document.getElementsByClassName("right_arrow")[0].removeEventListener("click",set123);
    }
 }
 else if(count1==100 && set1=="courses"){
   console.log(pos2);
   clearInterval(a112);
   count1=0;
   if(Math.round(((document.getElementsByClassName(set1).length)/2)-1)==i12){
       document.getElementsByClassName("right_arrow")[1].style.color="grey";
       document.getElementsByClassName("right_arrow")[1].removeEventListener("click",set123);
   }
 }
}

let a113;
function reset123(event){
   set1=event.target.nextElementSibling.firstElementChild.getAttribute("class");
   if(set1=="cardsbc"){
      document.getElementsByClassName("right_arrow")[0].addEventListener("click",set123);
      document.getElementsByClassName("right_arrow")[0].style.color="black";
      i1--;
      console.log(i1);
   }
   else{
      document.getElementsByClassName("right_arrow")[1].addEventListener("click",set123);
      document.getElementsByClassName("right_arrow")[1].style.color="black";
      i12--;
      console.log(i12);
   }
   a113 = setInterval(move1,1);
}

function move1(){
   if(set1=="cardsbc"){
      console.log(set1);
      pos1=pos1+0.824;
      pos=pos1;
      count++;
   }
   else{
      console.log(set1);
      pos2=pos2+0.894;
      pos=pos2;
      count1++;
   }

for(let i=0;i<document.getElementsByClassName(set1).length;i++){
 document.getElementsByClassName(set1)[i].style.translate=`${pos}vw`;
}
if(count==100 && set1=="cardsbc"){
   console.log(pos1);
   clearInterval(a113);
 count=0;
 if(i1==0){
     document.getElementsByClassName("left_arrow")[0].style.color="grey";
     document.getElementsByClassName("left_arrow")[0].removeEventListener("click",reset123);
     console.log(i1);
   }
}
else if(count1==100 && set1=="courses"){
clearInterval(a113);
count1=0;
if(i12==0){
   console.log(i12);
    document.getElementsByClassName("left_arrow")[1].style.color="grey";
    document.getElementsByClassName("left_arrow")[1].removeEventListener("click",reset123);
}
}
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}