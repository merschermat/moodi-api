const mongoose = require('mongoose')
// const uri = 'mongodb+srv://master:master_kanban@kanban-8fgdw.mongodb.net/test?retryWrites=true'
// const uri = 'mongodb://localhost:27017/kanban'
const uri ='mongodb+srv://master:master_kanban@cluster0.8fgdw.mongodb.net/moodi?retryWrites=true&w=majority'

function connectionOpen() {    
    try{
        mongoose.connect(uri, { useNewUrlParser: true });
        mongoose.set('useFindAndModify', false)
    }catch(err){
        console.log(err);
    }
}
function connectionClose(){
    mongoose.connection.close()
}

module.exports = {
    connectionOpen,
    connectionClose
}