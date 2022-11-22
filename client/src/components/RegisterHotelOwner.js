import React,{useState} from "react";
import { NavLink } from "react-router-dom";



export const RegisterHotelOwner = () => {

  const [inpval, setINP] = useState({
    hotelOwnerName: "",
    hotelName: "",
    hotelContact: "",
    hotelTotalRooms: "",
    hotelEmail: "",
    
})

const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}

const addHotelOwner=async(e)=>{
    e.preventDefault();

    const {hotelOwnerName,hotelName,hotelContact,hotelTotalRooms,hotelEmail}=inpval;

    const res=await fetch("http://localhost:8003/registerhotelowners",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            hotelOwnerName,hotelName,hotelContact,hotelTotalRooms,hotelEmail
        })
    })    
    const data=await res.json();
    console.log(data);

    if(res.status===422||!data){
        alert("error");
        console.log("error");
    }else{
        alert("Hotel Owner added successfully");
        console.log("Hotel Owner added successfully");
    }
        
    

};

  return (
    
    <div className="container">
            <NavLink to="/">HotelOwners</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Owner Name</label>
                        <input type="text" value={inpval.hotelOwnerName} onChange={setdata} name="hotelOwnerName" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Hotel Name</label>
                        <input type="text" value={inpval.hotelName} onChange={setdata} name="hotelName" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Contact</label>
                        <input type="number" value={inpval.hotelContact} onChange={setdata} name="hotelContact" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Total Rooms</label>
                        <input type="number" value={inpval.hotelTotalRooms} onChange={setdata} name="hotelTotalRooms" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label  className="form-label">Email</label>
                        <input type="text" value={inpval.hotelEmail} onChange={setdata} name="hotelEmail" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit "  onClick={addHotelOwner}
                    className="btn btn-primary col-lg-7 col-md-6 col-12">Submit</button>
                </div>
            </form>
        </div>

  )
}

export default RegisterHotelOwner;

