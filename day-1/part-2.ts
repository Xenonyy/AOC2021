import input from './input';

let counter = 0;

for (let i: number = 0; i < input.length; i++) {
  if (
    input[i] + input[i + 1] + input[i + 2] <
    input[i + 1] + input[i + 2] + input[i + 3]
  ) {
    counter++;
  }
  console.log(counter);
}
