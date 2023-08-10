
let livesLeft = 10;
var matches =0;
let boxesCounted = 0;
let  playerLives = document.querySelector(".livesLeft")
playerLives.textContent = livesLeft;
let playerMatches = document.querySelector(".matchesMade")
playerMatches.textContent = matches;
const resetButton = document.querySelector("resetButton")
// let firstOpened=false;
// let secondOpened=false;

const imageArray =  [
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

const outsideBox = document.querySelector(".gameContainer")
const insideBox = document.querySelector(".insideBox")
var flippedCards = [];
function shuffle(imageArray){
  for (let i = imageArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [imageArray[i], imageArray[j]] = [imageArray[j], imageArray[i]];
     }
    }

function newBoard(){
    shuffle(imageArray);

for (let i =0; i<imageArray.length; i++){
    let card = document.createElement('img')
    card.setAttribute('src', 'images/questionMark.png')
    card.setAttribute('id', i)
    // card.addEventListener("click", show)
    outsideBox.appendChild(card)
    
    
    card.addEventListener("click", function (evt) {
        // console.log(evt.target.id)
        // console.log(imageArray[i].id -1)
        card.setAttribute('src', imageArray[i].imgSrc)
        card.setAttribute('name', imageArray[i].name)
        // console.log(card.name)
        flippedCards.push(evt.target.name)
        console.log(flippedCards)

        if(flippedCards[0] === flippedCards[1]){
            console.log(`You found a match!`)
            playerMatches.textContent++
            // flippedCards[0].setAttribute('border', '5px solid yellow')
            // flippedCards[1].setAttribute('border', '5px solid yellow')
            
            flippedCards=[];
        }
        else if (flippedCards.length >=2){ //NOT WORKING
            // card.setAttribute('src', 'images/questionMark.png')
            // console.log(evt.target.name)
            flippedCards=[];
            playerLives.textContent--
            // return flippedCards
            if (playerLives.textContent === 0){
                console.log(playerLives.textContent)
                alert('GAME OVER')
            }
        }
       
        // else if(flippedCards[0] !== flippedCards[1]){
        //     playerLives.textContent--
        // }
     
        // playerLives.textContent-- ; //change number of Lives
      
    })





}
}

newBoard();


// let cards = [...card]



//If box[i] is selected, reveal the card





function restartGame(){
    newBoard();
    shuffle(imageArray);
}

// resetButton.addEventListener("click", function (e) {
//     restartGame();
//     console.log(e.target)
    
//     })

