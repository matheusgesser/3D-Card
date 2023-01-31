const sizeBtns = document.querySelectorAll(".sizes button");
sizeBtns.forEach(sizeBtn => {
    sizeBtn.addEventListener('click', () => {
        sizeBtns.forEach(sizeBtn => { sizeBtn.classList.remove('active'); });
        sizeBtn.classList.add('active');
    });
});

const card = document.querySelector('.card');
const container = document.querySelector('.container');

const sneaker = document.querySelector(".sneaker");
const description = document.querySelector(".info");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)*-1 / 60;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 60;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    sneaker.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(100px)";
    card.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease-in-out";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
});