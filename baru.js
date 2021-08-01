//deklarasi variabel
let choicePlayer;
let choiceAI;
let optionsAI;
let randomAI;
let skorMenang = 0;
let skorKalah = 0;



let papantengah = document.getElementById("papantengah")

document.getElementById("restartbutton").onclick = papantengah.innerHTML = `<h1> test </h1>`;


// fungsi komparasi

//apabila player memilih batu

document.getElementById("rock").onclick = function() {pickRock(), rockPaperScissors()};
function pickRock() {
    choicePlayer = "rock";
    optionsAI = ["rock", "paper", "scissors"];
    randomAI = Math.floor(Math.random()*3);
    choiceAI = optionsAI[randomAI];
    document.getElementById("bingkairock").style.backgroundColor= "#C0C0C0";
    document.getElementById("bingkaipaper").style.backgroundColor= "#000000";
    document.getElementById("bingkaiscissors").style.backgroundColor= "#000000";
}

//apabila player memilih kertas

document.getElementById("paper").onclick = function() {pickPaper(), rockPaperScissors()};
function pickPaper() {
  choicePlayer = "paper";
  optionsAI = ["rock","paper","scissors"];
  randomAI = Math.floor(Math.random() * 3);
  choiceAI = optionsAI[randomAI];
  document.getElementById("bingkairock").style.backgroundColor= "#000000";
  document.getElementById("bingkaipaper").style.backgroundColor= "#C0C0C0";
  document.getElementById("bingkaiscissors").style.backgroundColor= "#000000";

}

//apabila player memilih gunting

document.getElementById("scissors").onclick = function() {pickScissors(), rockPaperScissors()};
function pickScissors() {
  choicePlayer = "scissors";
  optionsAI = ["paper","scissors","rock"];
  randomAI = Math.floor(Math.random() * 3);
  choiceAI = optionsAI[randomAI]; 
  document.getElementById("bingkairock").style.backgroundColor= "#000000";
  document.getElementById("bingkaipaper").style.backgroundColor= "#000000";
  document.getElementById("bingkaiscissors").style.backgroundColor= "#C0C0C0";
}


function rockPaperScissors() {
    if (choicePlayer == "rock" && choiceAI == "scissors" || choicePlayer == "paper" && choiceAI == "rock" || choicePlayer == "scissors" && choiceAI == "paper") {
      papantengah.innerHTML = `<h1> You win! </h1><hr>Computer chose ${choiceAI}<hr>wins: ${++skorMenang}<br>losses: ${skorKalah}`;
    }
    if (choicePlayer == "rock" && choiceAI == "paper" || choicePlayer == "paper" && choiceAI == "scissors" || choicePlayer == "scissors" && choiceAI == "rock") {
      papantengah.innerHTML = `<h1>You lose!</h1><hr>Computer chose ${choiceAI}<hr>wins: ${skorMenang}<br>losses: ${++skorKalah}`;
    }
    if (choicePlayer == choiceAI) {
      papantengah.innerHTML = `<h1>You tie! </h1><hr>Computer chose ${choiceAI}<hr>wins: ${skorMenang}<br>losses: ${skorKalah}`;
    }



//menggantibackground

if (choiceAI =="rock") {
        document.getElementById("bingkairockAI").style.backgroundColor= "#C0C0C0";
        document.getElementById("bingkaipaperAI").style.backgroundColor= "#000000";
        document.getElementById("bingkaiscissorsAI").style.backgroundColor= "#000000";          
}
      
if (choiceAI =="paper") {
        document.getElementById("bingkairockAI").style.backgroundColor= "#000000";
        document.getElementById("bingkaipaperAI").style.backgroundColor= "#C0C0C0";
        document.getElementById("bingkaiscissorsAI").style.backgroundColor= "#000000";      
}
      
 if (choiceAI =="scissors") {
        document.getElementById("bingkairockAI").style.backgroundColor= "#000000";
        document.getElementById("bingkaipaperAI").style.backgroundColor= "#000000";
        document.getElementById("bingkaiscissorsAI").style.backgroundColor= "#C0C0C0";
    } 
}

