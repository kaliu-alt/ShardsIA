function processar() {
    let foto = document.getElementById("foto").files[0];

    if (!foto) {
        alert("Envie uma foto primeiro");
        return;
    }

    document.getElementById("resultado").innerHTML =
        "<p>Reconstruindo fragmento... (simulação por enquanto)</p>";
}
