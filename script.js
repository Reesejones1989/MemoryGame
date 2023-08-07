
let livesLeft = 10;
var matches =0;

const boxHolder = document.querySelector(".outsideBox")

let  playerLives = document.querySelector(".livesLeft")
playerLives.textContent = livesLeft;

let playerMatches = document.querySelector(".matchesMade")
playerMatches.textContent = matches;


let boxesCounted = 0;

const btn = document.querySelector("button")

//  btn.addEventListener('click', function (e) {})
let firstOpened=false;
let secondOpened=false;

//
const cardData =  [
{imgSrc: "./images/pic1.webp", name:"pic1", id:1},
{imgSrc: "./images/pic2.webp", name:"pic2", id:2},
{imgSrc: "./images/pic3.webp", name:"pic3", id:3},
{imgSrc: "./images/pic4.jpg", name:"pic4", id:4},
{imgSrc: "./images/pic5.webp", name:"pic5", id:5},
{imgSrc: "./images/pic6.jpg", name:"pic6", id:6},
{imgSrc: "./images/pic1.webp", name:"pic1", id:7},
{imgSrc: "./images/pic2.webp", name:"pic2", id:8},
{imgSrc: "./images/pic3.webp", name:"pic3", id:9},
{imgSrc: "./images/pic4.jpg", name:"pic4", id:10},
{imgSrc: "./images/pic5.webp", name:"pic5", id:11},
{imgSrc: "./images/pic6.jpg", name:"pic6", id:12},
];

console.log(cardData);

//Set the 12 boxes to have pic1-pic6 * 2
document.querySelectorAll("insideBox").values = cardData
const card=document.querySelectorAll("insideBox")
let cards = [...card]



//If box[i] is selected, reveal the card














// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}





