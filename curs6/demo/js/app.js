import {add, inm} from './main.js';

import salutAAA from './main.js';



let x = 10;
let y = 15;

let suma = add (x, y);
let produs = inm(x, y);


function salut(){
    console.log('Salut');
}

console.log(`Suma numerelor ${x} si ${y} este`, suma);
console.log(`Produsul numerelor ${x} si ${y} este`, produs);

let buna = salut('ion');
console.log(buna);
let sal= salutAAA('vasile');
console.log(sal);