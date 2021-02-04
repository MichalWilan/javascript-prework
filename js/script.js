function playGame() {
  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return "kamień";
    } else if (argMoveId == 2) {
      return "papier";
    } else if (argMoveId == 3) {
      return "nożyce";
    }

    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
  console.log("cosik");

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log("Wylosowana liczba to: " + randomNumber);

  let argComputerMove = getMoveName(randomNumber);

  /*
  if (randomNumber == 1) {
    computerMove = "kamień";
  }
  if (randomNumber == 2) {
    computerMove = "papier";
  }
  if (randomNumber == 3) {
    computerMove = "nożyce";
  }
  */
  printMessage("Komputera ruch to: " + argComputerMove);

  let playerInput = prompt(
    "Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce."
  );

  console.log("Gracz wpisał: " + playerInput);

  let argPlayerMove = getMoveName(playerInput);

  printMessage("Gracza ruch to: " + argPlayerMove);

  /*
  if (playerInput == "1") {
    playerMove = "kamień";
  }

  if (playerInput == "2") {
    playerMove = "papier";
  }

  if (playerInput == "3") {
    playerMove = "nożyce";
  }
  */

  function displayResult(argComputerMove, argPlayerMove) {
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
  }
  /*Tutaj powinna pojawić się formuła wywołująca wyświetlanie wyniku. 
  Niestety nie mam pomysłu jak ją wywołać. Wynik jest z funkcji displayResult

  let wynik = displayResult;
  printMessage(wynik);
  */
  console.log("  komp  " + argComputerMove + "  gracz  " + argPlayerMove);
}
