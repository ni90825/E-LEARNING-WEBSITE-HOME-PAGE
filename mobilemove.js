let a22=document.getElementsByClassName("students");
let b22=a22.length;
let brf1;
let crf11=setTimeout(slide,5000)

while(b22%2!=0){
    b22++;
}
let x11=0;
let c11=0;
let m11=0;
function slide(){
    if((c11)==((b22)/2)-1){
        c11=-1;
        x11=90;
        // crf11=0;
        // console.log("ssl",x11);
    } 
    brf1=setInterval(linear,10);
}
// let crf11=0;
let qv11=0;
function stop(){
    clearInterval(brf1)
    c11++;
    qv11=0;
    crf11=setInterval(slide,5000);
    // console.log("ksks",crf11)
}
function linear(){
        clearInterval(crf11)
    //     console.log("crfq1",crf11)
    // console.log(x11);
    if((c11)!=(b22)/2){
        x11=x11-1;
        for(let p=0;p<a22.length;p++){
        a22[p].style.translate=x11.toString()+"vw";
    }
    qv11++;
    }
    if(qv11>89){ 
    stop();
    }
}