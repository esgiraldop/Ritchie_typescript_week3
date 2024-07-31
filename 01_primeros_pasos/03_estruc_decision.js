"use strict";
function posOrNeg(num) {
    return num < 0 ? "negativo" : num > 0 ? "positivo" : "igual a cero";
}
const otroPosOrNeg = (num) => {
    return num < 0 ? "negativo" : num > 0 ? "positivo" : "igual a cero";
};
const number = 10;
console.log("posOrNeg: ", posOrNeg(number));
console.log("otroPosOrNeg: ", otroPosOrNeg(number));
