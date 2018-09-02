import './style.css';
import myImage from './ds3.jpg';
import printMe from './print.js';

document.getElementById("main-title").innerHTML = "Hello Webpack";

const content = document.getElementById("content");
const newImage = new Image();
const btn = document.createElement('button');

newImage.src = myImage;
btn.innerHTML = "Click me and check console!";
btn.onclick = printMe;


content.appendChild(newImage);
content.appendChild(btn);