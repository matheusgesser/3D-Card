const sizeBtns = document.querySelectorAll(".sizes button");
sizeBtns.forEach(sizeBtn => { sizeBtn.addEventListener('click', () => {
    sizeBtns.forEach(sizeBtn => {sizeBtn.classList.remove('active');});
    sizeBtn.classList.add('active');
    });
});

const card = document.querySelector('.card');
const container = document.querySelector('.container');

const sneaker = document.querySelector(".sneaker");
const description = document.querySelector(".info");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 35;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 35;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    //Popout
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(150px)";
    card.style.transition = "none";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease-in-out";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
});