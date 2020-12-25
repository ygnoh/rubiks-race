// 6 colors: white, orange, yellow, blue, green, red
const COLORS = ["W", "O", "Y", "B", "G", "R"];


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

console.log(rollDice());
