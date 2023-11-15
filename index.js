
import express from 'express'
const app = express()
const port = 3000


console.log("app is started");
app.get('/', (req, res) => {
  res.json([
    {projectName: "Hoger Lager", description: "Maak een het spel Hoger Lager"},
    {projectName: "Build A Game", description: "Ontwikkel een spel"}
  ]);
})

app.listen(port, () => {
  console.log('api should be working')
  console.log(`Example app listening on port ${port}`)
})
