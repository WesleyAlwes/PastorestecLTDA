document.addEventListener('DOMContentLoaded', function() {
    const btnOcultar = document.getElementById('ocultarBarra');
    const topo = document.querySelector('.topo');
    let topoVisivel = true;

    if (btnOcultar && topo) {
        btnOcultar.addEventListener('click', function() {
            topoVisivel = !topoVisivel;
            
            if (topoVisivel) {
                topo.style.display = 'flex';
                btnOcultar.textContent = '☰ Ocultar barra';
            } else {
                topo.style.display = 'none';
                btnOcultar.textContent = '☰ Mostrar barra';
            }
        });
    }
});
document.getElementById("paginaInicial").addEventListener("click", function() {
    window.location.href = "index.html";
});

