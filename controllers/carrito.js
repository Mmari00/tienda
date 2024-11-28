const carrito = document.querySelector('#carrito tbody');
const listaProductos = document.querySelector('#lista-1');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    listaProductos.addEventListener('click', agregarProducto);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; 
        limpiarHTML(); 
    });
}

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const productoSeleccionado = e.target.parentElement.parentElement;
        leerDatosProducto(productoSeleccionado);
    }
}

function leerDatosProducto(producto) {
    const infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.precio').textContent,
        id: producto.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    };

    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {
        articulosCarrito = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                return producto;
            } else {
                return producto;
            }
        });
    } else {
        articulosCarrito = [...articulosCarrito, infoProducto];
    }

    carritoHTML();
}

function carritoHTML() {
    limpiarHTML();
    articulosCarrito.forEach(producto => {
        const { imagen, titulo, precio, cantidad, id } = producto;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-producto" data-id="${id}">X</a>
            </td>
        `;
        carrito.appendChild(row);
    });

    document.querySelectorAll('.borrar-producto').forEach(boton => {
        boton.addEventListener('click', eliminarProducto);
    });
}

function eliminarProducto(e) {
    e.preventDefault();
    const productoId = e.target.getAttribute('data-id');
    articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
    carritoHTML();
}

function limpiarHTML() {
    while (carrito.firstChild) {
        carrito.removeChild(carrito.firstChild);
    }
}
