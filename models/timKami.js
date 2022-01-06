const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const timkamiSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: [true, 'nama wajib diisi']
    },
    deskripsi: {
        type: String,
        required: [true, 'deskripsi wajib diisi']
    },
    posisi: {
        type: String,
        required: [true, 'posisi wajib disi']
    },
    gambar: {
        type: String,
        required: [true, 'gambar wajib diisi']
    }
}, timestamps);


const timkamiModel = mongoose.model("ourteams", timkamiSchema)
module.exports = timkamiModel