// npm init
// npm i express
// RAPIDAPI CLIENT
// localhost

const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')


app.post("/musicas", (req, res) => {
    const musica = req.body
    if (!musica || Object.keys(musica).length === 0) {
        return res.status(400).json({ resposta: "Body não preenchido" })
    } else {
        try {
            const bd = JSON.parse(fs.readFileSync("bd.json", 'utf8'))
            bd.push(musica)
            fs.writeFileSync("bd.json", JSON.stringify(bd), "utf8")
            res.status(200).json({ resposta: "Música cadastrada com sucesso!" })
        } catch (error) {
            res.status(500).json({ resposta: error.message })
        }
    }    
})


app.get("/musicas", (req, res) => {
    try {
        const musica = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        res.status(200).json(musica)
    } catch (error) {
        res.status(500).json({ resposta: error.message })
    }
})


app.get("/musicas/:id", (req, res) => {
    const id = req.params.id
    try {
        const musicas = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const musica_encontrada = musicas.find((m) => m.id == id)
        if (!musica_encontrada) {
            return res.status(404).json({ error: "Música não existe em nosso banco" })
        }
        res.status(200).json(musica_encontrada)
    } catch (error) {
        res.status(500).json({ resposta: error.message })
    }
})


app.get("/musicas/estilo/:estilo", (req, res) => {
    const estiloBusca = req.params.estilo.toLowerCase()
    try {
        const musica = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const musicasFiltradas = musica.filter(
            (m) => m.estilo && m.estilo.toLowerCase() === estiloBusca
        )
        if (musicasFiltradas.length == 0) {
            return res.status(404).json({ resposta: "Nenhuma música encontrada para este estilo" })
        }
        res.status(200).json(musicasFiltradas)
    } catch (error) {
        res.status(500).json({ resposta: error.message })
    }
})


app.delete("/musicas/:id", (req, res) => {
    const id = req.params.id
    try {
        const musica = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const musicaExiste = musica.some(m => m.id == id)
        if (!musicaExiste) {
            return res.status(404).json({ resposta: "Música não encontrada" })
        }
        
        const musicaAtualizadas = musica.filter(m => m.id != id)
        fs.writeFileSync('bd.json', JSON.stringify(musicaAtualizadas), 'utf8')
        res.status(200).json({ resposta: "Música removida com sucesso!" })
    } catch (error) {
        res.status(500).json({ resposta: error.message })
    }
})
        
app.listen(port, () => {
    console.log("API de Músicas executando na porta " + port)
})
