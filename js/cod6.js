function agregarAlCarrito() 
{ 
    alert("¡Lo has agregado al carrito!");
}

function agregarComentario() {
    var nameInput = document.getElementById('name-input');
    var commentInput = document.getElementById('comment-input');
    var nameText = nameInput.value;
    var commentText = commentInput.value;

    if (nameText.trim() !== "" && commentText.trim() !== "") {
        var commentSection = document.getElementById('comment-section');

        // Crear un nuevo div para el comentario
        var newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `<strong>${nameText}:</strong> ${commentText}`;

        // Agregar el comentario a la sección de comentarios
        commentSection.appendChild(newComment);

        // Limpiar los inputs
        nameInput.value = "";
        commentInput.value = "";
    } else {
        alert("Por favor, rellena ambos campos.");
    }
}