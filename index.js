const COLORS = ["lightgrey", "orange", "yellow", "blue", "green", "red"];
const diceDiv = document.getElementById("dice");
const gridDiv = document.getElementById("grid");

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

function getGridColors() {
    return COLORS.flatMap(c => [c, c, c, c]).sort(() => Math.random() - 0.5);
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

function paintGrid() {
    const colors = getGridColors();

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("div");

        for (let j = 0; j < 5; j++) {
            const col = document.createElement("div");

            col.className = "grid-element";
            col.style.backgroundColor = colors[5 * i + j] || "white";

            row.appendChild(col);
        }

        gridDiv.appendChild(row);
    }
}

rollDice();
paintGrid();
