const sliderLine = document.querySelector('.sliders .sliderLine');
const slidn = document.querySelectorAll('.slid');
const slmenli = document.querySelectorAll('.slmenu li');
const playbtn = document.getElementById('sliderPlay');
const btncont = document.querySelector('.btncont');
let count = 0;
let slwidth;
let interval = null;
let play;

function init() {
  //let win1 = document.querySelector('.sliders').offsetWidth;
    let win1 = window.innerWidth;
    slwidth = win1 > 600 ? Math.floor(win1 * 0.8) : win1 - 20;
    if (slwidth > 800) slwidth = 800;
  console.log(win1);
    btncont.style.width = slwidth +'px'; 
    document.querySelector('.sliders').style.width = slwidth + 'px';
    sliderLine.style.width = slwidth * slidn.length + 'px';
    let h2 = Math.floor(slwidth/2);
    if (win1 < 500) {
      h2 = h2 + 30;  
      document.querySelector('.slul').style.fontSize = '2rem';
      playbtn.style.fontSize = '1rem';
    };
    slidn.forEach(function (item, index) {
       item.style.width = slwidth + 'px';
       item.style.height = h2 + 'px';
    });
    slmenli[count].style.color = 'lime';
    btncont.style.height = h2 + 'px';
    btncont.style.marginTop = '-' + h2 + 'px';
    rollSlider();
    slidestop()
};
function slideshow() {
    interval = setInterval(function() {
        slmenli[count].style.color = '#ccc';
        count++;
        if (count >= slidn.length) {count = 0; }
        slmenli[count].style.color = 'lime';
        rollSlider();
    }, 3000);   
};
function rollSlider() {
    sliderLine.style.transform = 'translate3d(-' + (count * slwidth) + 'px,0,0)';
}
function playPause(){
    if(play){play = false; clearInterval(interval); playbtn.innerHTML = "►"; }
    else {play = true; playbtn.innerHTML = "ǀǀ"; slideshow() }
};
function slidestop() {clearInterval(interval); play = false; playbtn.innerHTML = "►";};

playbtn.addEventListener("click",playPause, true);

document.querySelector('.slnext').addEventListener('click', function () {
    slidestop();
    slmenli[count].style.color = '#ccc';
    count++;
    if (count >= slidn.length) {count = 0;}
    slmenli[count].style.color = 'lime';
    rollSlider();
});
document.querySelector('.slprev').addEventListener('click', function () {
    slidestop();
    slmenli[count].style.color = '#ccc';
    count--;
    if (count < 0) {count = slidn.length - 1;}
    slmenli[count].style.color = 'lime';
   rollSlider();
});
document.querySelector('.slul').addEventListener('click', function (e) {
    if (e.target.nodeName === 'LI') {
      let lid1 = e.target.id;
      lid1--; 
      if(play) {slidestop();}
      slmenli[count].style.color = '#ccc';
      count = lid1;
      slmenli[count].style.color = 'lime';
      rollSlider();
    };
});
init();
window.addEventListener('resize', init);
