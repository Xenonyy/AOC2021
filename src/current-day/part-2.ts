import input from './input';

let posX = 0;
let posY = 0;
let aim = 0;

input.map((e: [string, number]) => {
  if (e[0] === 'down') aim += e[1]
  if (e[0] === 'up') aim -= e[1]
  if (e[0] === 'forward') {
    
    posX += e[1];
    posY += aim * e[1];
  }

  console.log(posX, posY, aim);
});

const finalPosition = posX * posY;

console.log(finalPosition);
