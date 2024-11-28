document.querySelectorAll('.rating').forEach(rating => {
    rating.addEventListener('click', function (e) {
        if (e.target.classList.contains('estrella')) {
            const estrellas = Array.from(rating.children);
            const valorSeleccionado = e.target.dataset.value;

            
            estrellas.forEach(estrella => estrella.classList.remove('seleccionada'));

            
            estrellas.forEach(estrella => {
                if (estrella.dataset.value <= valorSeleccionado) {
                    estrella.classList.add('seleccionada');
                }
            });

            console.log(`Producto calificado con ${valorSeleccionado} estrellas.`);
        }
    });
});

function openModal(button) {
    const card = button.closest('.producto-card');
    document.getElementById('modal-img').src = card.dataset.img;
    document.getElementById('modal-nombre').textContent = card.dataset.nombre;
    document.getElementById('modal-descripcion').textContent = card.dataset.descripcion;
    document.getElementById('modal-precio').textContent = card.dataset.precio;
    document.getElementById('modal-color').style.backgroundColor = card.dataset.color;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}