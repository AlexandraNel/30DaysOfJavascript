




function playSound(event){
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    var key= document.querySelector(`.key[data-key="${event.keyCode}"]`);
   
    if (!audio) return; //stops function if no audio 
    audio.currentTime = 0; //reqind to start
    audio.play();
   
    key.classList.add("playing");
   };



function removeTransition(event){
    if (event.propertyName !== "transform" ) return; 
    this.classList.remove("playing"); 
 };

var keys = document.querySelectorAll(".key");

keys.forEach( key => key.addEventListener("transitionend", removeTransition));
addEventListener("keydown", playSound);

