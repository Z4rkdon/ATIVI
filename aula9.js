function criarArquivo(dados){
    const SerieJSON = JSON.stringify(dados)
    const fs = require ('fs');
    fs.writeFileSync("Serie2.json", SerieJSON)
}

let arquivo
function lerArquivo(){
    arquivo = require("./Serie.json")
}
lerArquivo()

function mostrarSerie(lista){
    console.log("###### ESTOQUE DE SERIES ######")
    lista.forEach((Serie) => {
        console.log(Serie.Desenho + "-" +
                    Serie.Criador + "Ano" +
                    Serie.dataLanc + "Temporadas" +
                    Serie.temporadas + "Preço: R$" +
                    Serie.Preço.toFixed(2).replaceAll(".",","))

    })
 
}

function novaSerie(objeto){
    arquivo.push(objeto)
}
novaSerie({
        Desenho : "O Mundo De Greg",
        dataLanc : "30/3/2018",
        temporadas : "seis",
        Criador : "Matt Burnett, Ben Levin",
        Disponibilidade: "Está disponível HBO",
        Sinopse: "É uma animação do Cartoon Network que acompanha Craig Williams e seus melhores amigos, Kelsey e JP, em aventuras exploratórias em um riacho selvagem próximo à sua casa. O local é uma utopia infantil, dominada por tribos de crianças, fortes e jogos imaginativos.",
        Preço: 130.00
})

mostrarSerie(arquivo)

let SeriesFiltrados = arquivo.filter((Serie) => Serie.Preço > 100)
mostrarSerie(SeriesFiltrados)

let SeriesDesconto = arquivo.map((Serie) => {
    return {...Serie, preço: Serie.Preço * 0.9}
})
mostrarSerie(SeriesDesconto)
