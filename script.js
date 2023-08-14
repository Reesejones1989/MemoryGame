
let livesLeft = 5;
var matches =0;
let boxesCounted = 0;
let  playerLives = document.querySelector(".livesLeft")
playerLives.textContent = livesLeft;
let playerMatches = document.querySelector(".matchesMade")
playerMatches.textContent = matches;
const resetButton = document.querySelector(".resetButton")

// resetButton.style.

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
    outsideBox.appendChild(card)
    
    resetButton.addEventListener("click", function(evt2){
        location.reload();
        // restartGame();


    })

    card.addEventListener("click", function (evt) {

        card.setAttribute('src', imageArray[i].imgSrc)
        card.setAttribute('name', imageArray[i].name)
        card.setAttribute('id', imageArray[i].id )
        flippedCards.push(evt.target)
        console.log(flippedCards)

     if (flippedCards.length ===2){
         if(flippedCards[0].name === flippedCards[1]?.name && flippedCards[0].id != flippedCards[1]?.id){
         console.log(`You found a match!`)
         playerMatches.textContent++
        //  flippedCards[0].setAttribute('border', '5px solid yellow')
        // flippedCards[1].setAttribute('border', '5px solid yellow')
        flippedCards[0].style.border= "5px solid yellow"
        flippedCards[1].style.border= "5px solid yellow"
        flippedCards=[];
            console.log(playerMatches.textContent)
            if(playerMatches.textContent === "6"){
                alert('You Won')
            }
           
            
        }
         else{
            setTimeout(()=> {
          flippedCards[0].src = "images/questionMark.png"
        
         flippedCards[1].src = "images/questionMark.png"
         flippedCards.length = 0;

            }, 500)
    
             playerLives.textContent--

             if(playerLives.textContent === "0"){
                console.log("Game Over")
                alert ('Game Over!')
            }
         }
     }    
    })
}
}
newBoard();

function restartGame(){
    newBoard();
    shuffle(imageArray);
}


