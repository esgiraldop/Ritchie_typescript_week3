interface IUser{
    id:string,
    name:string
}

class Tarea{
    
    static tarea1(list:number[]):number{
        return list.reduce((accum, item) => accum+item)
    }

    static tarea2(list:string[]):string{
        return list.reduce((accum, item) => accum+item)
    }

    static tarea3(users:IUser[]):string{
        return users.reduce((accum, item) => accum+`userId: ${item.id}, name:${item.name}\n`, '')
    }

    static tarea4(numbers:number[]):number{
        return numbers.sort((a, b) => b-a)[0]
    }
}

const numList = [1, 2, 3]
console.log("solucion tarea 1: ", Tarea.tarea1(numList))

const stringList = ["Esto ", "es ", "un ", "test"]
console.log("Solucion tarea 2: ", Tarea.tarea2(stringList))

const objList = [
    {
        id: "0",
        name: "Erick"
    },
    {
        id: "1",
        name: "Fede"
    }
]
console.log("Solucion tarea 3: \n", Tarea.tarea3(objList))

const nums2Sort = [5, 4, 3, 10, 2, 1]
console.log("Solucion tarea 4: \n", Tarea.tarea4(nums2Sort))