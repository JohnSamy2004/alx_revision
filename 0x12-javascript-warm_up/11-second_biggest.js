#!/usr/bin/node

let max = 0;

if (process.argv.length <= 3) {
  console.log(0);
} else {
  for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] > max) {
      max = process.argv[i];
    }
  }
  console.log(max);
}
