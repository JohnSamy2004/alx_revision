#!/usr/bin/node

if (isNaN(process.argv[2]) || process.argv.length <= 3) {
  console.log(NaN);
} else {
  console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));
}
