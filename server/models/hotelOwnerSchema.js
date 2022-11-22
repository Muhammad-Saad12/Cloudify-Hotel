const mongoose = require("mongoose");

const hotelOwnerSchema = new mongoose.Schema({
    hotelOwnerName:{
        type:String,
        required:true
    },
    hotelName: {
        type:String,
        required:true
    },
    hotelContact: {
        type:Number,
        required:true
    },
    hotelTotalRooms: {
        type:Number,
        required:true
    },
    hotelEmail:{
        type:String,
        required:true,
        unique:true
    }
});

const HotelOwner = new mongoose.model("HotelOwner", hotelOwnerSchema);

module.exports = HotelOwner;