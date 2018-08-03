let houses = []

module.exports = {
  getHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_houses().then(results => {
      res.status(200).send(results)
      console.log("get houses db", get_houses)
    }).catch(err => {console.log("GET HOUSE ERROR", err)
    })
   },
   addHouse: (req, res)  => {
     let { name, address, city, state, zip} = req.body
     const db = req.app.get('db')
     db.add_house([name, address, city, state, zip]).then( results => {
       res.status(200).send(results)
     }).catch(err => console.log('ADD HOUSE ERROR', err))
   },
   delete: (req, res) => {
     let { id } = req.params
     const db = req.app.get('db')
     db.delete( [id] ).then( results => {
       res.status(200).send(results)
     })
   }
  }