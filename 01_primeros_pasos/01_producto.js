"use strict";
class Producto {
    static hello() {
        console.log(`Hello ${this.nombre}`);
    }
}
// id: number;
// nombre: string;
// precio: string;
// constructor(){
//     this.id = 1
//     this.nombre ="Soap"
//     this.precio ="12.000"
// }
Producto.id = 1;
Producto.nombre = "test static";
Producto.precio = "120.000";
// const producto = new Producto()
// console.log("Producto id: ", producto.id)
console.log("Producto.id: ", Producto.id);
console.log("test");
console.log("test 2");
Producto.hello();
`
    ¿Cómo ayuda el tipado estático a prevenir errores en el manejo de variables y constantes?
    R/ Porque aveces la flexbilidad es mala. Typescript obliga al desarrollador a ceñirse a buenas prácticas programación, restringiendo la manera en la que se usan los tipos de datos, ya que estos siempre deben ser declarados y pueden ser casteados, pero hay que hacerlo de manera explícita.
`;
