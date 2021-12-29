const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const artikelSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: true,
    },
    deskripsi: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    }
}, timestamps);


const artikelModel = mongoose.model("Artikel", artikelSchema)
module.exports = artikelModel