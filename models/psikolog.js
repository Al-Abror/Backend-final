const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}

const psikologSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'nama wajib diisi']
    },
    spesialis: {
        type: String,
        required : [true, 'spesialis wajib diisi']
    },
    deskripsi: {
        type: String,
        required : [true, 'deskripsi wajib diisi']
    },
    testimoni: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'testimonis'
        }
    ],
    kategori : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'kategoris'
        }
    ],
    gambar: {
        type: String,
        default: "https://thumbs.dreamstime.com/z/no-image-vector-isolated-white-background-no-image-vector-illustration-isolated-156298619.jpg"
    }
}, timestamps)

const PsikologModel = mongoose.model('psikolog', psikologSchema)
module.exports = PsikologModel