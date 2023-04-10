/*-------------audio-------------------*/
let volumeslider = document.getElementById('volumeslider');
let mutebtn = document.getElementById('mutebtn');
let audio; 
function initAudio(){
  audio = new Audio();
  audio.volume = 0.1;
  audio.src = 'img/muz5.mp3';
  audio.loop = true;
  audio.muted = true;
}
function setvolume(){volumeslider.style.opacity = "1";
    audio.volume = volumeslider.value / 100; };
function mute(){
    if(audio.muted){audio.muted = false; audio.play();
        mutebtn.style.background = "url(img/aud30.png)";
    } else { audio.muted = true; audio.pause();
        mutebtn.style.background = "url(img/aud30a.png)"; }
};
initAudio();
mutebtn.addEventListener("click", mute);  
volumeslider.addEventListener("mousemove", setvolume);
volumeslider.addEventListener("mouseout", function () {
    volumeslider.style.opacity = "0";
});  