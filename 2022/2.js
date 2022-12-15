import { readTextFile } from './readTextFile.js';

const a = readTextFile('./2-1.txt');

const input3 = a.split('\n');

function calScore(a, b) {
  switch (a) {
    case 'A':
      if (b === 'X') return 4;
      if (b === 'Y') return 8;
      if (b === 'Z') return 3;
    case 'B':
      if (b === 'X') return 1;
      if (b === 'Y') return 5;
      if (b === 'Z') return 9;
    case 'C':
      if (b === 'X') return 7;
      if (b === 'Y') return 2;
      if (b === 'Z') return 6;
  }
  return 0;
}

const sum = input3.reduce((prev, curr) => {
  return prev + calScore(curr[0], curr[2]);
}, 0);
console.log(sum);

const b = readTextFile('./2-2.txt');

const input4 = b.split('\n');
// rock
// paper
// sicssor

function calScore2(a, b) {
  switch (a) {
    case 'A':
      if (b === 'X') return 3;
      if (b === 'Y') return 4;
      if (b === 'Z') return 8;
    case 'B':
      if (b === 'X') return 1;
      if (b === 'Y') return 5;
      if (b === 'Z') return 9;
    case 'C':
      if (b === 'X') return 2;
      if (b === 'Y') return 6;
      if (b === 'Z') return 7;
  }
  return 0;
}

const sum2 = input4.reduce((prev, curr) => {
  return prev + calScore2(curr[0], curr[2]);
}, 0);
console.log(sum2);
