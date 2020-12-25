const COLORS = ["lightgrey", "orange", "yellow", "blue", "green", "red"];
const EMPTY_COLOR = "white";
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
    const result = [];
    const colors = COLORS.flatMap(c => [c, c, c, c])
        .sort(() => Math.random() - 0.5);

    colors.push(EMPTY_COLOR);

    for (let i = 0; i <= 20; i += 5) {
        result.push(colors.slice(i, i + 5));
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

let emptyCoord = [4, 4];

function move(e) {
    const {dataset: {coord}, style: {backgroundColor}} = e.target;

    if (backgroundColor === EMPTY_COLOR) {
        return;
    }

    let [tI, tJ] = coord.split(",");

    tI = +tI;
    tJ = +tJ;

    const [eI, eJ] = emptyCoord;

    if (eI !== tI && eJ !== tJ) {
        return;
    }

    let i = 0;

    if (tI > eI) {
        while (eI + i !== tI) {
            gridColors[eI + i][tJ] = gridColors[eI + i + 1][tJ];

            i++;
        }
    } else if (tI < eI) {
        while (eI - i !== tI) {
            gridColors[eI - i][tJ] = gridColors[eI - i - 1][tJ];

            i++;
        }
    } else { // same
        if (tJ > eJ) {
            while (eJ + i !== tJ) {
                gridColors[tI][eJ + i] = gridColors[tI][eJ + i + 1];

                i++;
            }
        } else if (tJ < eJ) {
            while (eJ - i !== tJ) {
                gridColors[tI][eJ - i] = gridColors[tI][eJ - i - 1];

                i++;
            }
        }
    }

    gridColors[tI][tJ] = EMPTY_COLOR;
    emptyCoord = [tI, tJ];

    repaintGrid();
}

function repaintGrid() {
    gridDiv.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const row = document.createElement("div");

        for (let j = 0; j < 5; j++) {
            const col = document.createElement("div");

            col.className = "grid-element";
            col.style.backgroundColor = gridColors[i][j];
            col.dataset.coord = `${i},${j}`;

            col.addEventListener("click", move);
            row.appendChild(col);
        }

        gridDiv.appendChild(row);
    }
}

const gridColors = getGridColors();

rollDice();
repaintGrid();
