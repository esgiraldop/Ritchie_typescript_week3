class Producto{
    // id: number;
    // nombre: string;
    // precio: string;

    // constructor(){
    //     this.id = 1
    //     this.nombre ="Soap"
    //     this.precio ="12.000"
    // }

    static id: number = 1
    static nombre: string = "test static"
    static precio: string = "120.000"
    static hello():void{
        console.log(`Hello ${this.nombre}`)
    }
}

// const producto = new Producto()
// console.log("Producto id: ", producto.id)

console.log("Producto.id: ", Producto.id);
console.log("test");
console.log("test 2");
Producto.hello();
`
    ¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
    R/ Porque aveces la flexbilidad es mala. Typescript obliga al desarrollador a ceñirse a buenas prácticas programación, restringiendo la manera en la que se usan los tipos de datos, ya que estos siempre deben ser declarados y pueden ser casteados, pero hay que hacerlo de manera explícita.
`