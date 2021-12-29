const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const psikologSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    spesialis: {
        type: String,
        required : true
    },
    deskripsi: {
        type: String,
        required : true
    },
    testimoni: {
        type: String,
        required : true
    },
    gambar: {
        type: String,
        required : true
    }
}, timestamps)

const PsikologModel = mongoose.model('Psikolog', psikologSchema)
module.exports = PsikologModel