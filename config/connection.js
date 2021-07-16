const mongoose = require('mongoose');

// sambung dulu ke mongodb
mongoose.connect('mongodb://localhost:27017/ch6-challenge', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => console.log('>>>>>>>>>>> MONGODB IS CONNECTED & READY TO USE >>>>>>>>>>>>>>'));



// // buat object model dari schemanya
// const Students = mongoose.model('Students', studentSchema);

// // sambungin mongoose ke db
// const db = mongoose.connection;
// // kalau error, harus sepanjang waktu
// db.on('error', console.error.bind('console', 'connection error :'));
// // bikin instances simpan ubah data
// db.once('open',  async () => {
    
//     const newStudent = new Students();
//     newStudent.username : Arief 
// })

// eksport supaya bisa diakses router?
module.exports = 'mongodatabase';