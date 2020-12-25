const COLORS = ["white", "orange", "yellow", "blue", "green", "red"];

function getRandomColor() {
    return COLORS[Math.random() * COLORS.length | 0]
}

function getDiceColors() {
    const result = [[], [], []];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            result[i][j] = getRandomColor();
        }
    }

    return result;
}

function rollDice() {
    getDiceColors().forEach(row => {
        const rowDiv = document.createElement("div");

        row.forEach(col => {
            const div = document.createElement("div");

            div.className = "dice-element";
            div.style.backgroundColor = col;

            rowDiv.appendChild(div);
        });

        diceDiv.appendChild(rowDiv);
    });
}

const myColors = COLORS.reduce((acc, c) => {
    acc.push(c);
    acc.push(c);
    acc.push(c);
    acc.push(c);

    return acc;
}, []);

const diceDiv = document.getElementById("dice");

rollDice();

