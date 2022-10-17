var x = document.getElementById("myAudio");

function enableAutoplay() { 
  x.autoplay = true;
  x.loop=true;
  x.load();
}
 
enableAutoplay();


window.onload = enableAutoplay;



