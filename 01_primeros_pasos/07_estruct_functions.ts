// Tarea 1

const maxValue = (numList:number[]):number =>{
    return numList.sort((a, b) => b-a)[0]
}
const numArray = [10, 5, 7, 8, 1];
console.log("Task 1: ", maxValue(numArray));


//Tarea 2
const restParamsFunc = (...params:(string|number|boolean)[]):string =>{
    const first2types = params.slice(0, 2).map(elem => typeof elem)
    if(first2types[0] !== first2types[1]){
        return "The first two parameters do not have the same type"
    }
    const idxs:number[] = []
    params.slice(2, params.length+1).forEach((elem, idx) => {
        if(typeof elem !== first2types[0]){
            idxs.push(idx+2)
        }
    })
    return idxs.length?`Elements with indices ${idxs.join(', ')} have different types`:"All the elements have the same type"
}
const arry = [1, 2, "10", true]
console.log("Tarea 2: ", restParamsFunc(...arry))


//Tarea 3

function fillMat(size:number){
    const newMatrix = [];
    for(let j=0; j < size; j++){
        let newArray = []
        for(let i=0; i < size; i++){
            newArray.push(0)
        }
        newMatrix.push(newArray)
    }
    return newMatrix
}

function matRoller(matrix:number[][]){
    const newMat = fillMat(matrix.length)
    for(let i=0; i<matrix.length; i++){

        for(let j=0; j<matrix.length; j++){
            // console.log(`[i][j]:[${i}][${j}]`);
            // console.log(`matrix[i][j+matrix.length-1-i]: matrix[${j}][${matrix.length-1-i}]`);
            // console.log(`[${i}][${j}] --> [${j}][${matrix.length-1-i}]`);
            // newMat[i][j] = matrix[j][matrix.length-1-i];
            newMat[j][matrix.length-1-i] = matrix[i][j];
        }
    }
    return newMat
}

const matrix:number[][] = [ [1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9]];
console.log("The ")
console.log("The new matrix is: ", matRoller(matrix));

`Correct answer = [ [7, 4, 1],
                    [8, 5, 2],
                    [9, 6, 3]]`