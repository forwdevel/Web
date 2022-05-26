const uphead = document.querySelector(".uphead");
const dwhead = document.querySelector(".dwhead");
const wheat = document.querySelector(".wheat");
const topDrop = document.querySelector(".top-drop");
const deco1 = document.querySelector(".hover-deco1");
const deco2 = document.querySelector(".hover-deco2");
const see1 = document.querySelector(".hover-see1");
const see2 = document.querySelector(".hover-see2");

deco1.addEventListener("mouseover", function (event) {
    uphead.style.height = "400px";
    dwhead.style.padding = "400px 0 0 0";
    wheat.style.display = "none";
    deco1.style.textDecoration = "underline";
    see1.style.display = "block";
    see1.style.height = "auto";
    see1.style.backgroundColor = "rgb(186, 12, 47)";
    see2.style.display = "block";
    see2.style.height = "auto";
    see2.style.backgroundColor = "rgb(186, 12, 47)";
}, false);

deco2.addEventListener("mouseover", function (event) {
    uphead.style.height = "400px";
    dwhead.style.padding = "400px 0 0 0";
    wheat.style.display = "none";
    deco2.style.textDecoration = "underline";
    see1.style.display = "block";
    see1.style.height = "auto";
    see1.style.backgroundColor = "rgb(186, 12, 47)";
    see2.style.display = "block";
    see2.style.height = "auto";
    see2.style.backgroundColor = "rgb(186, 12, 47)";
}, false);

deco1.addEventListener("mouseout", function (event) {
    deco1.style.textDecoration = "none";
    uphead.style.height = "53px";
    dwhead.style.padding = "0 0 0 0";
    wheat.style.display = "initial";
    see1.style.display = "none";
    see1.style.height = "auto";
    see1.style.backgroundColor = "rgb(186, 12, 47)";
    see2.style.display = "none";
    see2.style.height = "auto";
    see2.style.backgroundColor = "rgb(186, 12, 47)";
}, false);

deco2.addEventListener("mouseout", function (event) {
    deco2.style.textDecoration = "none";
    uphead.style.height = "53px";
    dwhead.style.padding = "0 0 0 0";
    wheat.style.display = "initial";
    see1.style.display = "none";
    see1.style.height = "auto";
    see1.style.backgroundColor = "rgb(186, 12, 47)";
    see2.style.display = "none";
    see2.style.height = "auto";
    see2.style.backgroundColor = "rgb(186, 12, 47)";
}, false);