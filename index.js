
const productos = []
let formularioProductos = document.getElementById("formularioProductos")
let boton = document.getElementById("boton")

class Productos {
    constructor (codigo, nombre, cantidad, precioCompra, precioVenta){
        this.codigo = codigo
        this.nombre = nombre.toUpperCase() 
        this.cantidad = cantidad
        this.precioCompra = precioCompra
        this.precioVenta = precioVenta
    }     
    calcularPrecioCompra() {
        return this.precioCompra * this.cantidad 
    }    
    calcularPrecioVenta(){
        return this.precioVenta * this.cantidad
    } 
}


formularioProductos.onsubmit = (event) => validarFormulario(event)
function validarFormulario(event){
    event.preventDefault() 
    let codigo = parseInt(inputCodigo.value)
    let nombre = inputNombre.value
    let cantidad = parseInt(inputCantidad.value)
    let precioCompra = parseFloat(inputPrecioCompra.value)
    let precioVenta = parseFloat(inputPrecioVenta.value)
 
    inputCodigo.value =""
    inputNombre.value =""
    inputCantidad.value =""
    inputPrecioCompra.value=""
    inputPrecioVenta.value =""

    
    let producto = new Productos (codigo, nombre,cantidad, precioCompra, precioVenta)
    boton.onclick = () => {alert("Se registró la información ingresada")}  
    productos.push(producto)    
    console.log(productos)
     
}
