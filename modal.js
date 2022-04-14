document.getElementById("iconeModal").onclick = function() { abrirModal() };

function abrirModal() {
    document.getElementById("modalInvisivel").style.display = "inherit"
}

document.getElementById("modalInvisivel").onclick = function(event) { fecharModal(event) };

function fecharModal(event) {
    const modalInvisivel = document.getElementById("modalInvisivel")
    if (event.target == modalInvisivel) {
        modalInvisivel.style.display = "none";
    }
}