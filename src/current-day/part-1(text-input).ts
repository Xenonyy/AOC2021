const fs = require('fs');
const input = fs.readFileSync('src/current-day/input.txt').toString();

let posX = 0;
let posY = 0;

const split = input.split('\n')
    .map((x: string) => x.split(' '))
    .map((x: string): [string, number] => [x[0], parseInt(x[1])]);

split.map((e: [string, number]) => {
  if (e[0] === 'forward') posX += e[1]
  if (e[0] === 'up') posY -= e[1]
  if (e[0] === 'down') posY += e[1]


  
  console.log(posX, posY);
});

const finalPosition = posX * posY;

console.log(finalPosition);
