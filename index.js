const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("PALMEIRAS MAIOR CAMPEÃO DO BRASIL")
})

app.get("/ptbr", function(req,res){
    res.send("Chupa Gambá")
})
app.listen(3000)

app.post()
app.put()
app.patch()
app.listen()
app.delete()