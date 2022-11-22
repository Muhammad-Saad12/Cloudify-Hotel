import React,{useState,useEffect} from "react";
import { NavLink, useParams } from 'react-router-dom';


const EditHotelOwner = () => {
    // const [hotelOwners, setHotelOwners] = useState([]);
    // console.log(hotelOwners);

    

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

    const {id} = useParams("");

    const getdata=async()=>{

        const res=await fetch(`http://localhost:8003/readhotelowners/${id}`,{
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
            setINP(data);
            console.log("Data Read");
        }
            
        
    
    };

    useEffect(()=>{
        getdata();
    },[]);

    const updateHotelOwner = async(e)=>{
        e.preventDefault();

        const { hotelOwnerName,hotelName,hotelContact,hotelTotalRooms,hotelEmail} = inpval;

        const res2 = await fetch(`http://localhost:8003/edithotelowners/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                hotelOwnerName,hotelName,hotelContact,hotelTotalRooms,hotelEmail
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            alert("data added successfully");
            
        }

    }

  return (
    <div className="container">
    <NavLink to="/">HotelOwners2</NavLink>
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

            <button type="submit" onClick={updateHotelOwner} className="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
  )
}

export default EditHotelOwner