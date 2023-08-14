
let livesLeft = 5;
var matches =0;
let boxesCounted = 0;
let  playerLives = document.querySelector(".livesLeft")
playerLives.textContent = livesLeft;
let playerMatches = document.querySelector(".matchesMade")
playerMatches.textContent = matches;
const resetButton = document.querySelector(".resetButton")
const highScore = document.querySelector("#highScore")
const scoreArray = [];
let currentPlayer =0;



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
    // console.log(scoreArray)


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
        // console.log(flippedCards)

     if (flippedCards.length ===2){
         if(flippedCards[0].name === flippedCards[1]?.name && flippedCards[0].id != flippedCards[1]?.id){
        //  console.log(`You found a match!`)
         playerMatches.textContent++
        
        flippedCards[0].style.border= "5px solid yellow"
        flippedCards[1].style.border= "5px solid yellow"
        flippedCards=[];
            // console.log(playerMatches.textContent)
            if(currentPlayer === 0 && playerMatches.textContent === "6"){
                // highScore = scoreArray
                scoreArray.push(Number(playerMatches.textContent))
                currentPlayer =1;
                console.log(currentPlayer)
                playerLives.textContent = "5";
                playerMatches.textContent = "0"
                // outsideBox.querySelectorAll("img").forEach((element)=> {
                    // element.remove();
                // })
                Array.from(outsideBox.querySelectorAll("img")).forEach((element)=>{
                    element.remove()
                })
                newBoard();
                alert('You Matched them All' + ` For a Score of  ${scoreArray}`)
            }
           
            
        }
         else{
       
            setTimeout(()=> {
        flippedCards[0].src = "images/questionMark.png"
        flippedCards[1].src = "images/questionMark.png"
        flippedCards.length = 0;
            }, 500)
             playerLives.textContent--
             if(currentPlayer === 0 && playerLives.textContent === "0"){
                scoreArray.push(Number(playerMatches.textContent))
                currentPlayer = 1;
                console.log(currentPlayer)
                playerLives.textContent = "5";
                playerMatches.textContent = "0"
                Array.from(outsideBox.querySelectorAll("img")).forEach((element)=>{
                    element.remove()
                })
                newBoard();
                alert ('Game Over!' + ` Your Score was  ${scoreArray}`)
            }
         }
     }
     console.log({currentPlayer, match:playerMatches.textContent, lives: playerLives.textContent})
     if(currentPlayer === 1 && playerLives.textContent === "0" || currentPlayer === 1 && playerLives.textContent === "0"){
        scoreArray.push(Number(playerMatches.textContent))
      }
     if(currentPlayer === 1 && playerMatches.textContent === "6" || currentPlayer === 1 && playerLives.textContent === "0"){
        console.log(scoreArray)
        if(scoreArray[0] > scoreArray[1]){
                      alert("Player One Wins")
                    }
                    else if (scoreArray[1] > scoreArray[0]){
                         alert("Player Two Wins")
                     }
                     else{
                         alert("Its a Tie")
                     }
    }   
    
    })
    
}}
newBoard();
function restartGame(){
    newBoard();
    shuffle(imageArray);
}
