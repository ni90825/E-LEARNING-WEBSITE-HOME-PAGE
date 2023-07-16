let a1;

if(parseInt(window.outerWidth,10)<=800){
    a1=document.createElement("script");
    a1.src="mobile.js";
    document.body.appendChild(a1);
}
let a45;
let js;
let a34;
if(parseInt(window.outerWidth,10)<=800){
    a45=document.createElement("script");
    a45.src="mobilemove.js";
    document.body.appendChild(a45);
}
else{
    a34=document.createElement("script");
    a34.src="logic.js"
    document.body.appendChild(a34);
}