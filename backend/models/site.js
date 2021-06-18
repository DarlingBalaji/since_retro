var mongoose = require("mongoose");


var siteSchema = new mongoose.Schema({
    sitename: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    }
 
}, {timestamps: true});



module.exports = mongoose.model("sitesettings", siteSchema);

