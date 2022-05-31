const sideAnchor1 = document.getElementById("side1-anchor");
const sideAnchor2 = document.getElementById("side2-anchor");
const sideAnchor3 = document.getElementById("side3-anchor");

const side1 = document.getElementById("side1-ul");
const side2 = document.getElementById("side2-ul");
const side3 = document.getElementById("side3-ul");

const lastside = document.getElementById('last-side-li');



// Side-menu 1st
sideAnchor1.addEventListener( "mouseover", (event) => {
    side1.style.display = "block";
}, false);

sideAnchor1.addEventListener("mouseout", (event) => {
    side1.style.display = "none";
}, false);

// Side-menu 2nd
sideAnchor2.addEventListener( "mouseover", (event) => {
    side2.style.display = "block";
}, false);

sideAnchor2.addEventListener("mouseout", (event) => {
    side2.style.display = "none";
}, false);

// Side-menu 3rd
sideAnchor3.addEventListener( "mouseover", (event) => {
    side3.style.display = "block";
}, false);

sideAnchor3.addEventListener("mouseout", (event) => {
    side3.style.display = "none";
}, false);