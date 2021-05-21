let divs=document.getElementsByClassName("banner")[0];
let banners=divs.children;
let bannerImgs=[];
for(let i=0;i<banners.length;i++){
    let imageEffect=banners[i].children;
    bannerImgs.push(imageEffect[0].children[3]);
}
for(let i=0;i<banners.length;i++){
    let child=banners[i].children[0];
    child.addEventListener("mouseover",(e)=>{
        let playButton=child.children[3];
        playButton.style.opacity=1;
        e.stopPropagation();
    });
    child.addEventListener("mouseout",(e)=>{
        let playButton=child.children[3];
        playButton.style.opacity=0;
        e.stopPropagation();
    });
    
}
let figs=document.getElementsByClassName('artists')[0].children;
for(let i=0;i<figs.length;i++){
    let child=figs[i].children[1];
    child.addEventListener("mouseover",(e)=>{
        child.style.opacity=1;
        e.stopPropagation();
    });
    child.addEventListener("mouseout",(e)=>{
        child.style.opacity=0;
        e.stopPropagation();
    });

}
let play=document.getElementsByClassName("play");
let musicEl=document.getElementsByClassName('musicbar')[0];
for(let i=0;i<play.length;i++){
    let el=play[i];
    el.addEventListener("click",()=>{
        musicEl.style.opacity=1;
    });
}
let queueBlockEls=document.getElementsByClassName('queueBlock');
let isDroppedDown=false;
for(let i=0;i<queueBlockEls.length;i++){
    let childrens=queueBlockEls[i].children;
    let childDot=childrens[4];
    let childDivId=childrens[5].id;
    let el;
    childDot.addEventListener("click",()=>{
        el=document.getElementById(childDivId);
        if(isDroppedDown===false){
        el.style.display='initial';
        isDroppedDown=true;
        }
        else{
            el.style.display='none';
            isDroppedDown=false;
        }
    });

}


