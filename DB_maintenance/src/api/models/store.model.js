const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema (
    {
        nombre: {type: String, require: true},
        direction: { type : String, require: true},
        codigoPostal: {type: Number, require: true},
        ciudad: {type:String, require: true},
        provincia: {type:String, require: true},
        telefono:{type:Number, require:false},
        maintenances: [ { type: Schema.Types.ObjectId, ref : 'maintenances', required: false }  ]

    }, {timestamps: true}
)

const Store = mongoose.model("stores", storeSchema)

module.exports = Store;