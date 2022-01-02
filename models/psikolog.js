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
    testimoni: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'testiPsikolog'
        }
    ],
    gambar: {
        type: String,
        required : true
    }
}, timestamps)

const PsikologModel = mongoose.model('Psikolog', psikologSchema)
module.exports = PsikologModel