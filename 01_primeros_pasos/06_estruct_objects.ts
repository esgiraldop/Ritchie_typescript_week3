class Car{
    marca: string;
    modelo: string;
    año: number;

    constructor(marca:string, modelo:string, año:number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    getProperties(){
        return Object.keys(this)
    }
}

// Tarea 1
const newCar = new Car("Toyota", "viejo", 2003)
console.log("Tarea 1: ", newCar.getProperties())

//Tarea 2
class Car2{
    constructor(){

    }

    static printParentCarInfo(car:{
        marca: string;
        modelo: string;
        año: number;}):string{
        return `marca: ${car.marca}\nmodelo: ${car.modelo}\naño: ${car.año}`
    }
}

console.log("Tarea 2: ", Car2.printParentCarInfo(newCar))

// Tarea 3
function IncreaseCarYear(car:{
    marca: string;
    modelo: string;
    año: number;
}):{
    marca: string;
    modelo: string;
    año: number;
}{
    car.año 
    return {...car, año: car.año+1}
}

const newCar2 = IncreaseCarYear(newCar)
console.log("Tarea 3: ", Car2.printParentCarInfo(newCar2))