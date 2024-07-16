// Task 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}

// Task 3
let num = 0;
let whileI = 1;
while (whileI <= 10) {
  num += whileI;
  whileI++;
}
console.log(num);

//  Task 4
let whileI2 = 10;
while (whileI2 >= 1) {
  console.log(whileI2);
  whileI2--;
}

// Task 5
let doI = 1;
do {
  console.log(doI);
  doI++;
} while (doI <= 5);

// Task 6
let factorial = 3;
let result;
if (factorial === 0 || factorial === 1) {
  result = 1;
} else {
  result = factorial;
  do {
    result = result * (factorial - 1);
    factorial--;
  } while (factorial > 1);
}
console.log(result);

// Task 7
let pattern = "*";
for (let i = 1; i <= 5; i++) {
  let j = 1;
  while (j <= i) {
    // process.stdout.write() is use to print anything no the same line
    process.stdout.write("*");
    j++;
  }
  console.log("");
}

// Task 8
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

// Task 9
for (let i = 1; i <= 10; i++) {
    console.log(i);
    if (i === 7) break;
  }