let col=document.querySelector(':root');
let fixnav=document.getElementById("fixnav");
function trogbut(){
if (fixnav.style.display=="block") {
fixnav.style.display = "none";
} else {
fixnav.style.display = "block";
}}

let setbut=document.getElementById("theme");
    function themechange(){
        if (setbut.style.display=="block") {
            setbut.style.display = "none";
            } else {
            setbut.style.display = "block";
            setbut.style.cursor="pointer";
            }
    }
function setActiveColor1(){
    document.documentElement.style.cssText="--skin:red"
}
function setActiveColor2(){
    document.documentElement.style.cssText="--skin:yellow"
}
function setActiveColor3(){
    document.documentElement.style.cssText="--skin:green"
}
function setActiveColor4(){
    document.documentElement.style.cssText="--skin:blue"
}

function op(a) {
      document.getElementById("main").style.display ="none";
      document.getElementById(a).style.display ="flex";

  }
  function cl(a) {
    //   document.getElementById("main").style.position='relative';
      document.getElementById("main").style.display ="grid";
      document.getElementById(a).style.display ="none";    }
    