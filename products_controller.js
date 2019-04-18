module.exports = {
  getAll (req, res) {
    const db = req.app.get('db')
    db.read_products().then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(`ERROR: ${err}`)
      res.status(500).send(`Could not find records`)
    })    
  },

  getOne (req, res) {
    const db=req.app.get('db')
    const id=req.params.id
    db.read_product([id]).then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(`ERROR: ${err}`)
      res.status(500).send(`Could not find record`)
    })
  },

  create (req, res) {
    const db = req.app.get('db')
    let {name, description, price, image_url} = req.body
    

    db.create_product([name, description, price, image_url]).then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(`ERROR: ${err}`)
      res.status(500).send(`Failed to create record`)
    })
  },

  update (req, res) {
    const db = req.app.get('db')
    let {desc} = req.query
    db.update_product([req.params.id, desc]).then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(`ERROR: ${err}`)
      res.status(500).send(`Failed to update record`)
    })
  },

  delete (req, res) {
    const db = req.app.get('db')
    let {id} = req.params
    db.delete_product([id]).then(result => {
      res.status(200).send(result)
    }).catch(err => {
      console.log(`ERROR: ${err}`)
      res.status(500).send(`Failed to delete record`)
    })
  }
  
}