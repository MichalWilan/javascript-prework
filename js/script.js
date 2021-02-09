{
  const playGame = function (playerInput) {
    function clearMessages() {}
    const getMoveName = function (argMoveId) {
      if (argMoveId == 1) {
        return "kamień";
      } else if (argMoveId == 2) {
        return "papier";
      } else if (argMoveId == 3) {
        return "nożyce";
      }
      printMessage("Nie znam ruchu o id " + argMoveId + ".");
      return "nieznany ruch";
    };

    let randomNumber = Math.floor(Math.random() * 3 + 1),
      computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);

    console.log(
      "Wylosowana liczba to: " + randomNumber + "Gracz wpisał: " + playerInput
    );

    printMessage("Komputera ruch to: " + computerMove);

    printMessage("Gracza ruch to: " + playerMove);

    const displayResult = function (argComputerMove, argPlayerMove) {
      printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);

      if (argComputerMove == "kamień" && argPlayerMove == "papier") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "nożyce") {
        printMessage("Ty Wygrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "kamień") {
        printMessage("Ty wygrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "nożyce") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "papier" && argPlayerMove == "kamień") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "papier") {
        printMessage("Ty przegrywasz!");
      } else if (argComputerMove == "kamień" && argPlayerMove == "kamień") {
        printMessage("Remis!");
      } else if (argComputerMove == "papier" && argPlayerMove == "papier") {
        printMessage("Remis!");
      } else if (argComputerMove == "nożyce" && argPlayerMove == "nożyce") {
        printMessage("remis!");
      }
    };
    displayResult(playerMove, computerMove);

    console.log("  komp  " + computerMove + "  gracz  " + playerMove);
  };

  document.getElementById("play-rock").addEventListener("click", function () {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function () {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function () {
      playGame(3);
    });
}

/*zamień funkcje nazwane na funkcje anonimowe zapisane w stałych*/
