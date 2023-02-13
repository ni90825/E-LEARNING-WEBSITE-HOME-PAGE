let a=document.getElementsByClassName("students");
let b=a.length;
while(b%3!=0){
    b++;
}
let x=0;
let c=0;
let m=0;
setTimeout(slide,5000)
let brf;
function slide(){
    if(c==(b/3)-1){
        c=-1;
        x=98;
    } 
    brf=setInterval(linear,0);
}
let crf;
function stop(){
   c++;
   qv=0;
   clearInterval(brf);  
   crf=setInterval(slide,5000);
}
let qv=0;
function linear(){
    clearInterval(crf);
    if(c!=b/3){
        x=x-1;
        for(let p=0;p<a.length;p++){
        a[p].style.translate=x.toString()+"vw";
    }
    qv++;
    }
    if(qv>97){ 
    stop();
    }
}
