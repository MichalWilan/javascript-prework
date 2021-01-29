function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
  let computerMove = `kamień`;
  printMessage(
    "Zagrałem " + computerMove + "! Jeśli Twój ruch to papier, to wygrywasz!"
  );
  let playerMove = `papier`;
  printMessage(
    "Zagrałem " + playerMove + "! Jeśli Twój ruch to kamień, to wygrywam!"
  );
}

function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
