const yes = document.getElementById("yes");
const no = document.getElementById("no");
const popup = document.getElementById("popup");
const ending = document.getElementById("ending");
const message = document.getElementById("message");

let size = 18;

const photos = [
    "monkey1.jpg",
    "monkey2.jpg"
];

const texts = [
    "Please? 🥺",
    "Think again 😭",
    "One more chance? ❤️",
    "Don't leave me 😂",
    "You can't escape destiny 😆",
    "Just press YES 💖",
    "I'll wait for you 🌸"
];

function random(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

function moveNo(){

    no.style.position="fixed";

    no.style.left=random(20,window.innerWidth-120)+"px";

    no.style.top=random(20,window.innerHeight-80)+"px";

    popup.src=photos[random(0,photos.length)];

    popup.style.display="block";

    popup.style.position="fixed";

    popup.style.left=random(20,window.innerWidth-250)+"px";

    popup.style.top=random(20,window.innerHeight-250)+"px";

    message.innerHTML=texts[random(0,texts.length)];

    size+=3;

    yes.style.fontSize=size+"px";

    yes.style.padding=(15+size/4)+"px "+(35+size/3)+"px";

    setTimeout(()=>{
        popup.style.display="none";
    },1500);

    createHeart();
}

no.addEventListener("mouseover",moveNo);

no.addEventListener("touchstart",function(e){

    e.preventDefault();

    moveNo();

});

no.addEventListener("click",function(e){

    e.preventDefault();

    moveNo();

});

yes.addEventListener("click",function(){

    ending.style.display="flex";

    startHearts();

});

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=random(0,window.innerWidth)+"px";

    heart.style.top=window.innerHeight+"px";

    heart.style.fontSize=random(20,45)+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

function startHearts(){

    setInterval(createHeart,250);

}