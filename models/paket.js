const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const paketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required : true
    },
    harga: {
        type: String,
        required : true
    },
}, timestamps)

const PaketModel = mongoose.model('Paket', paketSchema)
module.exports = PaketModel