//Funktion til at generere bankopladen 
function generateBingoCard() {
    let password = document.getElementById("passwordInput").value;
    let card = [[], [], []];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 9; j++) {
            let randomNumber = generateRandomNumber(password, 1, 9);
            card[i][j] = randomNumber;
        }
    }

    //Udskriv bankoplade i HTML-tabelen
    let bingoCardElement = document.getElementById("bingoCard");
    bingoCardElement.innerHTML = ""; //Tøm pladsholderen
    for (let i = 0; i < 3; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 9; j++) {
            let cell = document.createElement("td");
            cell.innerHTML = card[i][j];
            row.appendChild(cell);
        }
        bingoCardElement.appendChild(row);
    }
}

//Funktion til at generere et tilfældigt tal ud fra et seed/kodeord
function generateRandomNumber(password, min, max) {
    let seed = 0;
    for (let i = 0; i < password.length; i++) {
        seed += password.charCodeAt(i);
    }
    let randomNumber = min + Math.floor(seed * Math.random()) % (max - min + 1);
    return randomNumber;
}