"use strict";
class Tarea {
    static tarea1(list) {
        return list.reduce((accum, item) => accum + item);
    }
}
const numList = [1, 2, 3];
console.log("solucion tarea 1: ", Tarea.tarea1(numList));
