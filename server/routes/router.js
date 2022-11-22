const express= require("express");
const { mongo } = require("mongoose");
const router=express.Router();
const HotelOwner = require("../models/hotelOwnerSchema");

// router.get("/",(req,res)=>{
//    console.log("hello from router");
// });

// Create a new HotelOwner
router.post("/registerhotelowners",async(req,res)=>{
//    console.log(req.body);
    const {hotelOwnerName,hotelName,hotelContact,hotelTotalRooms,hotelEmail}=req.body;

    if(!hotelOwnerName || !hotelName ||! hotelContact ||!hotelTotalRooms || !hotelEmail){
        res.status(422).json("please fill all the fields");
    }

    try{

        const hotelOwnerExist=await HotelOwner.findOne({hotelEmail:hotelEmail});
        console.log(hotelOwnerExist);

        if(hotelOwnerExist){
            res.status(422).json("Hotel Owner already exists");
        }else{
            const addHotelOwner=new HotelOwner({
                hotelOwnerName,hotelName,hotelContact,hotelTotalRooms,hotelEmail
            });

            await addHotelOwner.save();
            res.status(201).json(addHotelOwner);
            console.log(addHotelOwner);
        }

    }catch(err){
        res.status(422).json(error);
    }
})

// Get all HotelOwners
router.get("/gethotelowners",async(req,res)=>{
    try{
        const hotelOwners=await HotelOwner.find();
         res.status(201).json(hotelOwners);
        console.log(hotelOwners);
    }catch(err){
        res.status(422).json(error);
    }
})

// get a single HotelOwner
router.get("/readhotelowners/:id",async(req,res)=>{
   try{
    console.log(req.params);
    const {id}=req.params;

    const hotelOwner=await HotelOwner.findById({_id:id});
    console.log(hotelOwner);
    res.status(201).json(hotelOwner);

   }catch(error){
       res.status(422).json(error);
   }

})

// update hotelOwners

router.patch("/edithotelowners/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const updateHotelOwner = await HotelOwner.findByIdAndUpdate(id,req.body,{
            new:true
        });

        console.log(updateHotelOwner);
        res.status(201).json(updateHotelOwner);

    } catch (error) {
        res.status(422).json(error);
    }
})

// delete Hotel Owner
router.delete("/deleteHotelOwner/:id",async(req,res)=>{
    try {
        const {id} = req.params;

        const deletHotelOwner = await HotelOwner.findByIdAndDelete({_id:id})
        console.log(deletHotelOwner);
        res.status(201).json(deletHotelOwner);

    } catch (error) {
        res.status(422).json(error);
    }
})


module.exports=router;