import React, { useEffect, useState } from 'react'
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CreateDashboard = () => {

  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const [email,setEmail]= useState("")
  const [dateodbirth,setdateofbirth]= useState("")
  const [address,setaddress]= useState("")
  const [gender,setGender]= useState("")
  const [about,setAbout]= useState("")
  const [contact,setcontact]= useState("")

  const navigate = useNavigate()
  // const [image,setImage]= useState("")
  const {currentUser} = useSelector((state)=>state.user)
  const id = currentUser.data.user._id

  const getuser = async()=>{
    try{
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/getuser/${id}`)


      if(res?.data.success){
        setFirstName(res.data.user.firstName)
        setLastName(res.data.user.lastName)
        setEmail(res.data.user.email)
        setGender(res.data.user.gender)
        setdateofbirth(res.data.user.dateofbirth)
        setAbout(res.data.user.about)
        setcontact(res.data.user.contactNumber)
        setaddress(res.data.user.address)
        // setImage(res.data.user.image)
        console.log("res is",res)

      }
    }
    catch(err){
      console.log(err)
    }
  }

  const submithandle= async (e)=>{
    e.preventDefault();

    try{
      const res = await axios.put(`${process.env.REACT_APP_API}/api/v1/auth/update/${id}`,{
        gender:gender,
        dateofbirth:dateodbirth,
        about:about,
        contactNumber:contact,
        address:address
      })
      

      if(res.data.success===true){
        toast.success(res.data.message)
        navigate('/dashboard/user')
        
      }else{
        toast.error(res.data.message)
      }

      console.log(res)
    }
    catch(err){
      console.log(err)
      toast.error(err.response.data.message)
    }
    // console.log(firstName,lastName,email,password,confirmpassword,address)
  }


  useEffect(()=>{
    getuser()
  },[])
   
  return (
    <div className='bg-gray-100 h-screen flex justify-center items-center '> 
    <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md '>

    
 <form onSubmit={submithandle} className='grid grid-cols-2 gap-4'  >
        
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            FirstName
            </label>
            <input
              type="text"
              value={firstName}
              
             autoComplete="on"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your Date of Birth"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            LastName
            </label>
            <input
              type="text"
              value={lastName}
             
             autoComplete="on"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your Date of Birth"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Email
            </label>
            <input
              type="email"
              value={email}
             
             autoComplete="on"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your Date of Birth"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e)=>setaddress(e.target.value)}
             autoComplete="on"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your Date of Birth"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
             Gender
            </label>
            <select className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg" value={gender} onChange={(e)=>setGender(e.target.value)}>
         <option value="mix">Mix</option>
         <option value="Male">Male</option>
         <option value="Female">Female</option>
        </select>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
            DateofBirth
            </label>
            <input
              type="Date"
              value={dateodbirth}
              onChange={(e)=>setdateofbirth(e.target.value)}
             autoComplete="on"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your Date of Birth"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
             About
            </label>
            <input
              type="text"
             value={about}
             onChange={(e)=>setAbout(e.target.value)}
            autoComplete="on"
              placeholder="Enter About Yourself"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
             Contact Number
            </label>
            <input
              type="Number"
             value={contact}
             onChange={(e)=>setcontact(e.target.value)}
             
             autoComplete="on"
              placeholder="Enter your Contact"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* <div>
    <label htmlFor="product-name" className="block mb-2 text-lg font-medium text-gray-900 ">Photo</label>
      <input type="file"  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg " name="photo"
                      onChange={(e)=>setPhoto(e.target.files[0])} />
    </div> */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create Profile
          </button>
        </form>
        </div>
    </div>
  )
}

export default CreateDashboard