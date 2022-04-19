async function traduzirTexto() {
    let texto = document.getElementById("textoPraTraduzir").value.toString()
    let dialeto = document.getElementById("dialetoForm")
    console.log(texto)

    const response = await fetch("./alfabeto.json");
    const obj = await response.json();
    const { leonxzv, cabreira } = obj
    //const { alfabeto, simples } = obj

    console.log(obj)
    for (let i = 0; i < dialeto.length; i++) {
        if (dialeto[i].checked) {
            let dialetoUtilizado = dialeto[i].value.toString()
            if (dialetoUtilizado == "leonxzv") {
                leonxzv.forEach((x) => {
                    texto = texto.replaceAll(x.chave, x.valor);
                    document.getElementById("textoTraduzido").value = texto;
                })
            }

            if (dialetoUtilizado == "cabreira") {
                cabreira.forEach((x) => {
                    texto = texto.replaceAll(x.chave, x.valor);
                    document.getElementById("textoTraduzido").value = texto;
                })
            }
        }

    }

    // alfabeto.forEach((x) => {
    //     texto = texto.replaceAll(x.chave, x.valor);
    //     document.getElementById("textoTraduzido").value = texto;
    // })


}