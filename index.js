const express = require('express')
const app = express()

const herois =["Homem-Aranha", "Hulk", "Ms marvel"]

//ENDPOINT listagem de todos os heróis (READ ALL ==> [GET])
app.get("/herois", function(req,res){
    res.send(herois)
})

app.get("/herois/:id", function(req,res){
    //acessar o parametro da rota ID
    const id = req.params.id
    //pega o item do array
    const umHeroi = herois[id]
    // envio o item encontrado
    res.send(umHeroi)
})

app.post("/herois", function(req,res){
    res.send(req.body)
})

app.listen(3000)

/*app.post()
app.put()
app.patch()
app.listen()
app.delete()*/

