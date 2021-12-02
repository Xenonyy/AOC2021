import input from './input';

let posX = 0;
let posY = 0;

input.map((e: [string, number]) => {
  if (e[0] === 'forward') posX += e[1];
  if (e[0] === 'up') posY -= e[1];
  if (e[0] === 'down') posY += e[1];
  console.log(posX, posY);
});

const finalPosition = posX * posY;

console.log(finalPosition);
