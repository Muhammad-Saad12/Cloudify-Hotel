import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import BedIcon from '@mui/icons-material/Bed';
import {  useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const ReadHotelOwners = () => {
    
    const {id} = useParams("");
    
    const [hotelOwners, setHotelOwners] = useState([]);
    console.log(hotelOwners);
    // http://localhost:8003/readhotelowners

    const getdata=async()=>{

        const res=await fetch(`http://43.206.154.206:8003/readhotelowners/${id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            
        })    
        const data=await res.json();
        console.log(data);
    
        if(res.status===422||!data){
            
            console.log("error");
        }else{
            setHotelOwners(data);
            console.log("Data Read");
        }
            
        
    
    };

    useEffect(() => {
        getdata();
    },[]);

  return (
    <div className="container mt-3">
    {/* <h1 style={{ fontWeight: 400 }}>Welcome Admin</h1> */}
    <h2 className="mb-7">Hotel Owner Detail</h2>
    <Card sx={{ maxWidth: 600 }} className="bg-grey border border-success">
        <CardContent>
            <div className="add_btn">
                
            </div>
            <div className="row">
                <div className="left_view col-lg-6 col-md-6 col-12">
                  <h3 className="mt-3" style={{ fontWeight: 200 }}>Hotel Owner Name: <span >{hotelOwners.hotelOwnerName}</span></h3>
                    <h3 className="mt-3" style={{ fontWeight: 200 }}>Hotel Name: <span >{hotelOwners.hotelName}</span></h3>
                    <p className="mt-3" style={{ fontWeight: 200 }}><MailOutlineIcon />Email: <span>{hotelOwners.hotelEmail}</span></p>
                    <p className="mt-3" style={{ fontWeight: 200 }}><BedIcon />Total Rooms: <span>{hotelOwners.hotelTotalRooms}</span></p>
                </div>
                <div className="right_view  col-lg-6 col-md-6 col-12">

                    <p className="mt-5" style={{ fontWeight: 200 }}><PhoneAndroidIcon />mobile: <span>{hotelOwners.hotelContact}</span></p>
                    
                   
                </div>
            </div>

        </CardContent>
    </Card>
</div>
  )
}

export default ReadHotelOwners