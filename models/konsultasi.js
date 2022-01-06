const mongoose = require("mongoose")
const { phoneValidator } = require('./validators')

const timestamps = {
    timestamps : true
}
const konsultasiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'nama wajib diisi']
    },
    psikolog : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'psikolog'
        }
    ],
    gender: {
        type: String,
        enum: ["laki-laki", "perempuan"],
        lowercase : true,
        required: [true, 'jenis kelamin wajib diisi']
    },
    date: {
        type: Date,
        required: [true, 'tanggal wajib diisi']
    },
    no_hp: {
        type: String,
        required : [true, 'phone number is required'],
        validate : [phoneValidator, 'nomor telepon tidak valid'],
        match : [/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/, 'nomor telepon tidak valid']
    },
    keluhan: {
        type: String,
        required: [true, 'keluhan wajib diisi']
    }
}, timestamps)

const KonsultasiModel = mongoose.model('Konsultasi', konsultasiSchema)
module.exports = KonsultasiModel