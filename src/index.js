import './style.css';
import myImage from './ds3.jpg';
import printMe from './print.js';


const myTitle = document.createElement("h1");
const newImage = new Image();
const btn = document.createElement('button');

myTitle.innerHTML = "Hello Webpack";
newImage.src = myImage;
btn.innerHTML = "Click me and check console!";
btn.onclick = printMe;

document.body.appendChild(myTitle);
document.body.appendChild(newImage);
document.body.appendChild(btn);