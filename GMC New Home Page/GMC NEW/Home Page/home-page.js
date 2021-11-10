const playbt1 = document.querySelector(".playbt1");
const playbt2 = document.querySelector(".playbt2");
const playbt3 = document.querySelector(".playbt3");
const qbCard1 = document.querySelector(".qb-card1");
const qbCard2 = document.querySelector(".qb-card2");
const qbCard3 = document.querySelector(".qb-card3");
const videoPopup = document.querySelector(".video-popup");
const playerPopup1 = document.querySelector(".player-popup1");
const playerPopup2 = document.querySelector(".player-popup2");
const playerPopup3 = document.querySelector(".player-popup3");

const iframe = document.querySelector(".youtube-video");

playbt1.onclick = function () {
  qbCard1.classList.add("active");
  videoPopup.classList.add("active");
  playerPopup1.classList.add("active");
  document.body.style.overflow = "hidden";
  videoPopup.onclick = function () {
    qbCard1.classList.remove("active");
    videoPopup.classList.remove("active");
    playerPopup1.classList.remove("active");
    document.body.style.overflow = "auto";
  };
};

playbt2.onclick = function () {
  qbCard2.classList.add("active");
  videoPopup.classList.add("active");
  playerPopup2.classList.add("active");
  document.body.style.overflow = "hidden";
  videoPopup.onclick = function () {
    qbCard2.classList.remove("active");
    videoPopup.classList.remove("active");
    playerPopup2.classList.remove("active");
    document.body.style.overflow = "auto"; 
  };
};
playbt3.onclick = function () {
  qbCard3.classList.add("active");
  videoPopup.classList.add("active");
  playerPopup3.classList.add("active");
  document.body.style.overflow = "hidden";
  videoPopup.onclick = function () {
    qbCard3.classList.remove("active");
    videoPopup.classList.remove("active");
    playerPopup3.classList.remove("active");
    document.body.style.overflow = "auto";
  };
};

$('.video-popup').bind('click',function(e){
  $('.youtube-video').each(function(){
    this.contentWindow.postMessage('{"event":"command", "func":"stopVideo","args":""}','*')
  });
});