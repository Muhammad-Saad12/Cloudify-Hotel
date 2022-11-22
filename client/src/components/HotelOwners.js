import React from "react";
import { useState,useEffect } from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { NavLink } from "react-router-dom";

export const HotelOwners = () => {

  const [hotelOwners, setHotelOwners] = useState([]);
  console.log(hotelOwners);

  const getdata=async(e)=>{

    const res=await fetch("http://localhost:8003/gethotelowners",{
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
}, []);

const deleteHotelOwner = async (id) => {

  const res2 = await fetch(`http://localhost:8003/deleteHotelOwner/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if (res2.status === 422 || !deletedata) {
      console.log("error");
  } else {
      console.log("user deleted");
      getdata();
  }

}


  return (

    

    <div className="mt-5">
     
      <div className="container">

        <div className="add_btn mt-2 mb-2">
       
          <NavLink to="/registerhotelowners" className="btn btn-primary">Add Hotel Owner</NavLink>
        </div>
        <h2 className="mb-7">Hotel Owner Table</h2>
        <table class="table">
          <thead>
            <tr className="table-primary">
              <th scope="col">id</th>
              <th scope="col">Owner Name</th>
              <th scope="col">Hotel Name</th>
              {/* <th scope="col">Contact</th>
              <th scope="col">Total Rooms</th>
              <th scope="col">Email</th> */}
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>

          {
            hotelOwners.map((element,id)=>{
              return(                
                <>
                <tr>
              <th scope="row">{id+1}</th>
              <td>{element.hotelOwnerName}</td>
              <td>{element.hotelName}</td>
              {/* <td>{element.hotelContact}</td>
              <td>{element.hotelTotalRooms}</td>
              <td>{element.hotelEmail}</td> */}
              <td className="d-flex justify-content-between">
               <NavLink to={`readhotelowners/${element._id}`}> <button className="btn btn-success"><RemoveRedEyeIcon/></button> </NavLink> 
               <NavLink to={`edithotelowners/${element._id}`}><button className="btn btn-primary"><EditIcon/></button></NavLink> 
                <button className="btn btn-danger" onClick={()=>deleteHotelOwner(element._id)}><DeleteSweepIcon/></button>
              </td>
            </tr>
                </>
              )
            })
          }
            
           
          </tbody>
        </table>
      </div>
    </div>
    
  );
};
