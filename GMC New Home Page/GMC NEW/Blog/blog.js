const cardSection1 = document.querySelector('.blog-card-section1');
const cardSection2 = document.querySelector('.blog-card-section2');
const cardSection3 = document.querySelector('.blog-card-section3');

const showBtn1 = document.querySelector('.show-more-btn-1');
const showBtn2 = document.querySelector('.show-more-btn-2');
const showBtn3 = document.querySelector('.show-more-btn-3');

showBtn1.onclick = ()=>{
    cardSection2.style.display = "flex";
    showBtn1.style.display = "none";
}
showBtn2.onclick = ()=>{
    cardSection3.style.display = "flex";
    showBtn2.style.display = "none";
    showBtn3.style.display = "none";
}
