const mongoose = require("mongoose")
const { emailValidator } = require('./validators')

const timestamps = {
    timestamps : true
}
const hubungiSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email wajib diisi'],
        unique: true,
        validate : [emailValidator, 'email tidak valid'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'email tidak valid']
    },
    keluhan: {
        type: String,
        required: [true, 'keluhan wajib diisi']
    }
}, timestamps)

const HubungiModel = mongoose.model('contacts', hubungiSchema)
module.exports = HubungiModel