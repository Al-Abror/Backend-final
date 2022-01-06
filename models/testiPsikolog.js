const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const testiPsikologSchema = new mongoose.Schema({
    patientname: {
        type: String,
        default : 'anonim'
    },
    deskripsi: {
        type: String,
        required: [true, 'deskripsi wajib diisi']
    },
    gambar: {
        type: String,
        default: "https://thumbs.dreamstime.com/z/no-image-vector-isolated-white-background-no-image-vector-illustration-isolated-156298619.jpg"
    },
    psikolog : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'testiPsikolog'
        }
    ]
}, timestamps);


const testiPsikologModel = mongoose.model("TestimoniPsikolog", testiPsikologSchema)
module.exports = testiPsikologModel