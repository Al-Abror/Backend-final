const mongoose = require("mongoose")
const { phoneValidator } = require('./validators')

const timestamps = {
    timestamps : true
}
const konsultasiSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        lowercase : true,
        required: [true, 'gender is required']
    },
    date: {
        type: Date,
        required: true
    },
    no_hp: {
        type: String,
        required : [true, 'phone number is required'],
        validate : phoneValidator,
        match : /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/
    },
    keluhan: {
        type: String
    }
}, timestamps)

const KonsultasiModel = mongoose.model('Konsultasi', konsultasiSchema)
module.exports = KonsultasiModel