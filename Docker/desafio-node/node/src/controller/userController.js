const database = require("../database")
const table = 'user'


module.exports = {
  async create(req, res) {
    const { name } = req.body
    const transaction = await database.transaction()
    try {
      await transaction(table).insert({ name })
      await transaction.commit()
      return res.status(200).send()
    } catch (err) {
      await transaction.rollback()
      res.status(400).json({
        erro: 'Unexpect error while create new class'
      })
    }
  },

  async fullCycle(req, res) {
    try {
      const {id} = req.params
      const user = await database(table).select('name').where({id}).limit(1)
      if(!user[0]){
        return res.send(
          "<div style='display:flex; justify-content: center;'/><h1>FULL CYCLE</h1></div>"+
          "<div style='display:flex; justify-content: center;'/><h3>ID INVALIDO</h3>"
         )
      }
      return res.send(
       "<div style='display:flex; justify-content: center;'/><h1>FULL CYCLE</h1></div>"+
       "<div style='display:flex; justify-content: center;'/><h3>"+user[0].name+"</h3>"
      )
    } catch (err) {
      res.status(400).json({
        erro: 'Unexpect error while create new class'
      })
    }
  },

  async index(req, res) {
    try {
      const user = await database(table).select('*')
      res.status(200).json(user)
    } catch (err) {
      res.status(400).json({
        erro: 'Unexpect error while create new class'
      })
    }
  }

}


