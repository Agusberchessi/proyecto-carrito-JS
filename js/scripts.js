const shopContent = document.getElementById("shopContent");
const verCarrito =document.getElementById("verCarrito");
const modalContainer =document.getElementById("modal-container");

const productos = [
    { 
        id:1,
        nombre: "Arroz yamaní",
        precio: 200,
        img:
         "https://images.pexels.com/photos/7420889/pexels-photo-7420889.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id:2,
        nombre: "Algas vegetales",
        precio: 900,
        img:
        "https://images.pexels.com/photos/6249506/pexels-photo-6249506.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id:3,
        nombre:"Kanikama",
        precio:600,
        img:
          "https://media.istockphoto.com/id/1091644460/es/foto/palos-de-cangrejo-ensalada-en-un-plato-sobre-una-mesa-blanca.jpg?b=1&s=612x612&w=0&k=20&c=M11vKzDX0pE-cBx36_Oh2Ljf6Uo57OGWh6J2bsP3g0w=",
    },
    {
        id:4,
        nombre: "Salmon",
        precio: 1500,
        img:
         "https://images.pexels.com/photos/1683545/pexels-photo-1683545.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id:5,
        nombre:"salsa de soja",
        precio:700,
        img:
          "https://images.pexels.com/photos/1385185/pexels-photo-1385185.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id:6,
        nombre: "wasabi",
        precio: 500,
        img:
          "https://media.istockphoto.com/id/453446485/es/foto/wasabi-salsa-de-mostaza-de-la-comida-japonesa.jpg?b=1&s=612x612&w=0&k=20&c=SceW2HF_bMhfmEQB-CUw5-5TFQ321rbgUs_iM2O472E=",
    },
]



let carrito = [];

productos.forEach((product) => {
    let content= document.createElement("div");
    content.className= "card";
    content.innerHTML = `
     <img src="${product.img}">
     <h3>${product.nombre}</h3>
     <p>${product.precio}$</p>
     `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.className="comprar"
    comprar.innerText = "comprar";
    content.append(comprar);

    comprar.addEventListener("click", () =>{
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito)
    });
});

verCarrito.addEventListener("click", () => {
    console.log("holaFUNCIONA!!!!");  
    modalContainer.style.display="flex";
    const modalHeader =document.createElement("div");
    modalHeader.className= "modal-Header";
    modalHeader.innerHTML = `
    <h1 class= "modal-header-title"> Carrito. </h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText= "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display ="none";
    })

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML= `
    <img src=${product.img}">
    <h4>${product.nombre}</h4>
    <p>${product.precio}$</p>
    `;

    modalContainer.append(carritoContent);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0); 

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML= `total a pagar: ${total}$`;
    modalContainer.append(totalBuying);
});