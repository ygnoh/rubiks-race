const COLORS = ["white", "orange", "yellow", "blue", "green", "red"];

function getRandomColor() {
    return COLORS[Math.random() * COLORS.length | 0]
}

function rollDice() {
    const result = [[], [], []];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            result[i][j] = getRandomColor();
        }
    }

    return result;
}

const myColors = COLORS.reduce((acc, c) => {
    acc.push(c);
    acc.push(c);
    acc.push(c);
    acc.push(c);

    return acc;
}, []);

const diceDiv = document.getElementById("dice");

rollDice().forEach(row => {
    const parent = document.createElement("div");

    row.forEach(col => {
        const div = document.createElement("div");

        div.style.backgroundColor = col;

        parent.appendChild(div);
    });

    diceDiv.appendChild(parent);
});
