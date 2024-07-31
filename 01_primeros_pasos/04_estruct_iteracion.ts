function printNames(names:string[]):void{
    for(let i=0;i<names.length;i++){
        console.log(`names[${i}]: `, names[i])
    }
}

printNames(["1", "2", "3"])