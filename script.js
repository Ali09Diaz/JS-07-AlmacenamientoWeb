console.log("Estoy vivo");
/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/


/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.

*/


//Guardando mi primer dsto en localStorage

//LocalStorage.setitem (key, value )

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras
let carritoComprasFelipe = ["Sabritones", "CocaCola", "Chicles", "Tortillas"];

localStorage.setItem("CarritoCompras", carritoComprasFelipe);


//Obtener la informacion alamacenada en mi localStorage

//LocalStorage.getItem(key);
let apellido = localStorage.getItem("Apellido");
console.log(apellido);


//Recuperando el carrido de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);


//Borrar un elemento de localStorage
 //LocalStorage.removeItem(key);

 localStorage.removeItem("CarritoCompras");



//Conocer el largo o longitud del localStorage
//LocalStorage.length

let longitudLocalStorage = localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
localStorage.setItem("Apellido", "Gonzalez"); //Si te equivocas en la key, simplemente te hace una nueva