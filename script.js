async function traduzirTexto() {
    let texto = document.getElementById("textoPraTraduzir").value.toString();

    const response = await fetch("./alfabeto.json");
    const obj = await response.json();
    const { alfabeto } = obj

    alfabeto.forEach((x) => {
        texto = texto.replaceAll(x.chave, x.valor);
    });

    document.getElementById("textoTraduzido").value = texto;
}