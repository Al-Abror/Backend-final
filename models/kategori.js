const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const kategoriSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    gambar: {
        type: String
    }
}, timestamps)

const KategoriModel = mongoose.model('Kategori', kategoriSchema)
module.exports = KategoriModel