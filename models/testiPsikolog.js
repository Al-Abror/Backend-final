const mongoose = require("mongoose")

const timestamps = {
    timestamps : true
}
const testiPsikologSchema = new mongoose.Schema({
    patientname: {
        type: String
    },
    deskripsi: {
        type: String,
        required: true,
    },
    gambar: {
        type: String,
        required: true,
    },
    problema: {
        type: String,
        required: true,
    }
}, timestamps);


const testiPsikologModel = mongoose.model("TestimoniPsikolog", testiPsikologSchema)
module.exports = testiPsikologModel