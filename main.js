
const Zapatillas = function (nombre,precio,stock,codigo) {
    this.nombre = nombre 
    this.precio = precio
    this.stock = stock
    this.codigo= codigo
}

let zapatilla1 = new Zapatillas("adidas",95000, 3, 999)
let zapatilla2 = new Zapatillas("nike",105000, 5, 873)
let zapatilla3 = new Zapatillas("vans",95000, 4, 487)
let zapatilla4 = new Zapatillas("puma",95000, 3, 999)
let zapatilla5 = new Zapatillas("DC",105000, 5, 873)
let zapatilla6 = new Zapatillas("New Balance",95000, 4, 487)

let zapatillas = [zapatilla1,zapatilla2,zapatilla3,zapatilla4,zapatilla5,zapatilla6]

function filtrarZapatillas(){
    let palabraIngresada = prompt("ingresa la zapatilla que buscas").toUpperCase().trim()
    let resultado = zapatillas.filter((buscar)=>buscar.nombre.toUpperCase().includes(palabraIngresada))

    if (resultado.length > 0) {
        console.table (resultado)
    }else {
            alert("no se encontraron las zapatillas" + palabraIngresada)
        }
    }
    function validar () {
        let codigoIngresado = prompt ("Escriba codigo del producto")
        let codigoValido = zapatillas.filter((busqueda)=>busqueda.codigo).includes(codigoIngresado)
        alert ("GRACIAS POR SU COMPRA, ya estamos preparando su paquete!")
     }


alert ("bienvenidos a smile, el mejor lugar para elegir tus calzados")
let respuesta = confirm("desea buscar su modelo favorito? ")
 

 if (respuesta === true) {
    alert("En consola prodras ver las disponibles")
    console.table (filtrarZapatillas())
    validar()
    
 }
 else {
    alert ("Nos vemos luego")

 }


