let playButton=document.getElementById('playbutton');
let musicEl=document.getElementsByClassName('musicbar')[0];
playButton.addEventListener("click",()=>{
   musicEl.style.opacity=1;
});