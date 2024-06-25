const express = require('express')
const app = express()

const heroes =["Homem-Aranha, Hulk, Ms marvel"]

//ENDPOINT listagem de todos os heróis (READ ALL ==> [GET])
app.get("/heroes", function(req,res){
    res.send(heroes)
})

app.get("/heroes/:id", function(req,res){
    //acessar o parametro da rota ID
    const id = req.params.id
    //pega o item do array
    const umHeroi = heroes[id]
    // envio o item encontrado
    res.send(umHeroi)
})

app.listen(3000)

/*app.post()
app.put()
app.patch()
app.listen()
app.delete()*/

