const mongoose=require('mongoose')

const hotelReservationModel=new mongoose.Schema({
    hotelName:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:true
    },
    checkInDate:{
        type:String,
        required:true
    },
    checkOutDate:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true 
    },
    totalPrice:{
        type:String,
        reqiured:true
    },
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
    roomIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }], 
    totalDays:{
        type:Number,
        reqiured:true
    }
    
    
   
},{timestamps :true}) 

module.exports =  mongoose.model("hotelReservation",hotelReservationModel)  