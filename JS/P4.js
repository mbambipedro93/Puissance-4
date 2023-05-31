var PR = "R";
var PY = "Y";
var currplayer = PR;
var scorePR = 0; // Score pour le joueur rouge (PR)
var scorePY = 0; // Score pour le joueur jaune (PY)

var gameOver = false;
var board;
var currColumns = [5, 5, 5, 5, 5, 5, 5];

var row = 6;
var columns = 7;

window.onload = function() {
  setGame();
  
  // Création d'un bouton de réinitialisation
  let resetButton = document.createElement("button");
  resetButton.textContent = "Réinitialiser";

  // Ajout d'un événement de clic sur le bouton de réinitialisation
  resetButton.addEventListener("click", function() {
    location.reload(); // Recharge la page pour commencer une nouvelle partie
  });

  // Ajout du bouton de réinitialisation à la page HTML
  document.body.appendChild(resetButton);
};

function setGame() {
  board = [];
  for (let r = 0; r < row; r++) {
    let rowArr = [];
    for (let c = 0; c < columns; c++) {
      rowArr.push(" ");

      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.addEventListener("click", setPiece);
      document.getElementById("board").append(tile);
    }
    board.push(rowArr);
  }

  // Initialise les scores à zéro et les affiche sur la page
  scorePR = 0;
  scorePY = 0;
  document.getElementById("scorePR").innerText = scorePR;
  document.getElementById("scorePY").innerText = scorePY;
}

function setPiece() {
  if (gameOver) {
    return;
  }
  let coords = this.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  if (currColumns[c] < 0) {
    return;
  }
  r = currColumns[c];
  currColumns[c] = r - 1;
  board[r][c] = currplayer;

  let tile = document.getElementById(r.toString() + "-" + c.toString());
  if (currplayer == PR) {
    tile.classList.add("red-piece");
    currplayer = PY;
  } else {
    tile.classList.add("yellow-piece");
    currplayer = PR;
  }
  winner();
}

function winner() {
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          document.getElementById('board').style.backgroundColor = 'green';
          setwinner(r, c);
          return;
        }
      }
    }
  }





  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < row - 3; r++) {
      if (board[r][c] != " ") {
        if (board[r][c] == board[r + 1][c] && board[r + 1][c] == board[r + 2][c] && board[r + 2][c] == board[r + 3][c]) {
          document.getElementById('board').style.backgroundColor = 'green';
          setwinner(r, c);
          return;
        }
      }
    }

    for (let r = 0; r < row - 3; r++) {
      for (let c = 0; c < columns - 3; c++) {
        if (board[r][c] != ' ') {
          if (board[r][c] == board[r + 1][c + 1] && board[r + 1][c + 1] == board[r + 2][c + 2] && board[r + 2][c + 2] == board[r + 3][c + 3]) {
            document.getElementById('board').style.backgroundColor = 'green';
            setwinner(r, c);
            return;
          }
        }
      }
    }
    for (let r = 3; r < row; r++) {
      for (let c = 0; c < columns - 3; c++) {
        if (board[r][c] != ' ') {
          if (board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3]) {
            document.getElementById('board').style.backgroundColor = 'green';
            setwinner(r, c);
            return;
          }
        }
      }
    }

  }


  function setwinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == PR) {
      winner.innerText = "Victoire de KANEDA";
    } else {
      winner.innerText = "NEO TOKYO est TOMBÉE !! Tetsuo a tout détruit.";
      // alert; (ici ajout alert pour test si victoir voir meme prompte si posible)
      // document.getElementById('BG').style.backgroundImage = 'url("/css/340.webp")';
    }
    gameOver = true;
  }
}
