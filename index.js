
const productos = [
    {
    nombre: 'BAires',
    precio:  9520,
    descripción: 'Tablas de 60 piezas variadas de salmón y pesca del dia',
    categoria: 'tablas'
    },
    {
    nombre: 'Mixta',
    precio:  9000,
    descripción: 'Tablas de 30 piezas, una de salmón y otra vegetariana',
    categoria: 'tablas'
    },
    {
    nombre: 'Amigable',
    precio:  4000,
    descripción:'Tablas de 30 piezas vegetarianas y veganas',
    categoria: 'tablas'
    },
    {
    nombre: 'Soltere',
    precio:  2440,
    descripción: 'Tablas individual de 12 piezas + 8 piezas de regalo',
    categoria: 'tablas'
    },
    {
    nombre: 'Gaseosa',
    precio:  250,
    descripción: 'linea Coca-Cola',
    categoria: 'bebidas'
    },
    {
    nombre: 'Vino',
    precio:  2500,
    descripción: 'Rutini',
    categoria: 'bebidas'
    },
    {
    nombre: 'Agua',
    precio:  150,
    descripción: 'Polar',
    categoria: 'bebidas'
    },
];

let carrito = []

alert ("Bienvenido a TENTO SUSHI");

let usuario = prompt("¿Como te llamas?");
let mail = prompt("Cual es tu mail?");

let seleccion = prompt(`${usuario} desea comprar algun producto?`);

while(seleccion != "si" && seleccion != "no"){
    alert("No es una opcion valida");
    seleccion = prompt(`${usuario} desea comprar algun producto?`);
}
if(seleccion == "si"){
    alert("A continuacion nuestra lista de productos");
    let todosLosProductos = productos.map((producto) => "- " + producto.nombre + ": " + producto.descripción + " $" + producto.precio );
    alert(todosLosProductos.join("\n ")) 
}else if (seleccion == "no"){
    alert("Gracias por visitarnos, le invitamos a conocer nuestra pagina. \n Vuelva pronto!!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega  un producto a tu carrito");
    let precio = 0;

    if(producto == "baires" || producto == "mixta" || producto == "amigable" || producto == "soltere" || producto == "gaseosa" || producto == "vino" || producto == "agua"){
        switch(producto){
            case "baires":
                precio = 9520;
                break;
            case "mixta":
                precio = 9000;
                break;
            case "amigable":
                precio = 4000;
                break;
            case "soltere":
                precio = 2440;
                break;
            case "gaseosa":
                precio = 250;
                break;
            case "vino":
                precio = 2500;
                break;
            case "agua":
                precio = 150;
                break;
            default: 
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"));

    carrito.push({producto, unidades, precio});
    console.log(carrito)
    }else{
     alert("No tenemos ese producto");
    }

    seleccion = prompt("Desea seguir agregando productos en su carrito?");

    while(seleccion === "no"){
        alert("Gracias por elegir TENTO SUSHI")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}. Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);

function validarCompra(){
    let validar = (prompt("Has hecho una gran elección. Desea pagar con: \n\ Tajeta + $300 de recargo \n\ Efectivo"))
    if (validar.toLowerCase() === "tarjeta"){
        alert(total + 300); 
    } else {
        alert(total);
    }
}
validarCompra();
 
let mensaje = alert(`Muchas gracias por su compra. Le estaremos enviando la factura a su casilla de correo ${mail}`);