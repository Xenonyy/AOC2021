import input from "./input";

let counter = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] >= 1) {
    if (input[i - 1] < input [i]) {
      counter++;
    }
  }
  console.log(counter);
}
