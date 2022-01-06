const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const webinarSchema = new mongoose.Schema({
    judul: {
        type: String,
        required: [true, 'judul wajib diisi']
    },
    deskripsi: {
        type: String,
        required: [true, 'deskripsi wajib diisi']
    },
    gambar: {
        type: String,
        default: "https://thumbs.dreamstime.com/z/no-image-vector-isolated-white-background-no-image-vector-illustration-isolated-156298619.jpg"
    }
}, timestamps);


const webinarModel = mongoose.model("webinars", webinarSchema)
module.exports = webinarModel