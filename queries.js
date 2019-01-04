const db = require('./database-connections')

module.exports = {
    readAllData(){
        return db('data')
    },
    readData(id){
        return db('data').where('id',id).first()
    },
    createData(newStudent){
        return db('data').insert(newStudent).returning('*')
    },
    readAllUsers(){
        return db('users')
    },
    deleteMovie(id){
        return db('data')
          .where('id', id)
          .delete()
    },
    updateMovie(id, movie){
        return db('data')
            .where('id', id)
            .update(movie)
    }
}