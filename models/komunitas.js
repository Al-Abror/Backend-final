const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const komunitasSchema = new mongoose.Schema({
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
    },
    judul_dokumentasi: {
        type: String,
        required: true,
    },
    desk_dokumentasi: {
        type: String,
        required: true,
    },
    gambar_dokumentasi: {
        type: String,
        required: true,
    },
}, timestamps);


const komunitasModel = mongoose.model("Komunitas", komunitasSchema)
module.exports = komunitasModel