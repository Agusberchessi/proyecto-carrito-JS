const shopContent = document.getElementById("shopContent");
const verCarrito =document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-container");
const showAlert= document.getElementById("showAlert");
const cantidadCarrito= document.getElementById("cantidadCarrito");

const productos = [
    { 
        id:1,
        nombre: "Arroz yamaní",
        precio: 200,
        img:
         "https://images.pexels.com/photos/7420889/pexels-photo-7420889.jpeg?auto=compress&cs=tinysrgb&w=1600",
         cantidad: 1,
    },
    {
        id:2,
        nombre: "Algas vegetales",
        precio: 900,
        img:
        "https://images.pexels.com/photos/6249506/pexels-photo-6249506.jpeg?auto=compress&cs=tinysrgb&w=1600",
        cantidad:1,

    },
    {
        id:3,
        nombre:"Kanikama",
        precio:600,
        img:
          "https://media.istockphoto.com/id/1091644460/es/foto/palos-de-cangrejo-ensalada-en-un-plato-sobre-una-mesa-blanca.jpg?b=1&s=612x612&w=0&k=20&c=M11vKzDX0pE-cBx36_Oh2Ljf6Uo57OGWh6J2bsP3g0w=",
        cantidad:1,
    },
    {
        id:4,
        nombre: "Salmon",
        precio: 1500,
        img:
         "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1600",
         cantidad:1,
    },
    {
        id:5,
        nombre:"salsa de soja",
        precio:700,
        img:
          "https://images.pexels.com/photos/1385185/pexels-photo-1385185.jpeg?auto=compress&cs=tinysrgb&w=1600",
         cantidad: 1, 
    },
    {
        id:6,
        nombre: "wasabi",
        precio: 500,
        img:
          "https://media.istockphoto.com/id/453446485/es/foto/wasabi-salsa-de-mostaza-de-la-comida-japonesa.jpg?b=1&s=612x612&w=0&k=20&c=SceW2HF_bMhfmEQB-CUw5-5TFQ321rbgUs_iM2O472E=",
          cantidad:1,
    },
]



let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// recorrer los productos con el ForEach
productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () =>{
        // metodo some: me devuelve un valor booleano
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
    if(repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad ++;
            }
        });
    } else {
        carrito.push({
            id : product.id,
            nombre: product.nombre,
            img: product.img,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        
        console.log(carrito);
        carritoCounter();
        saveLocal();
    };

    });
});

// set Item
const saveLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};

// get Item