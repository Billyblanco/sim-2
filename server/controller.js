let houses = []

module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(results => {
      res.status(200).send(results)
      console.log("get houses db", get_houses)
    }).catch(err => {console.log("error", err)
    })
   }
}