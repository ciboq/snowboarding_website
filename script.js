let snowboard = document.getElementById("#snowboard1");

$(document).ready(function(){
    var currentMousePos = { x: -1, y: -1 };

let snowboardmove = false;
let x=0
let y=0

const boardcontainer = document.getElementById('snowboard_container')
const snowboard1 = document.getElementById('snowboard1')

boardcontainer.addEventListener("mousemove", e =>{
    if (snowboardmove === true) {
        x = e.pageX;
        y = e.pageY;
    }

    snowboard1.addEventListener("mousemove", e =>{
        snowboard1.style.top = e.pageY + 'px';
        snowboard1.style.left = e.pageX + 'px';
   })
})



    
  });

  document.getElementsByTagName('head')