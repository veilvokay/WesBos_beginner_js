import first, { returnHi as sayHi, last, middle } from './utils.js';
// import westerhoff from './wes.js';
import * as everything from './wes.js';

// console.log(westerhoff);
console.log(everything);
console.log(sayHi);
console.log(first);

const name = 'wes';

console.log(sayHi(name));

console.log('working...');

console.log(last, middle);