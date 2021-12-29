const mongoose = require("mongoose")
const { emailValidator } = require('./validators')

const timestamps = {
    timestamps : true
}
const hubungiSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate : emailValidator,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    keluhan: {
        type: String,
        required: true
    }
}, timestamps)

const HubungiModel = mongoose.model('Hubungi', hubungiSchema)
module.exports = HubungiModel