const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const maintenanceSchema = new Schema (
    {
      
        tienda:{ type: String, required: true },
        prioridad :{ type: String, required: true },
        oficio:{type: String, required: true},
        description: {type: String, require: true,},
        fecha: {type: Date, require: false},
        termiando:{type: Boolean, require: false}
    },
    {timestamps: true}
 );

 const Maintenance = mongoose.model("maintenances", maintenanceSchema)


module.exports = Maintenance;