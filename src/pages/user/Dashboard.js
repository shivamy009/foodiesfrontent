import React, { useEffect, useState } from 'react'
// import Dashbordshow from './Dashbordshow'
// import CreateDashboard from './CreateDashboard'
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  
  const navigate = useNavigate()
  const [firstName,setFirstName]= useState("")
  const [lastName,setLastName]= useState("")
  const [email,setEmail]= useState("")
  const [dateodbirth,setdateofbirth]= useState("")
  const [address,setaddress]= useState("")
  const [gender,setGender]= useState("")
  const [about,setAbout]= useState("")
  const [contact,setcontact]= useState("")
  const [image,setImage]= useState("")
  const {currentUser} = useSelector((state)=>state.user)
  console.log("Dashboard",currentUser)
  console.log("User id",currentUser.data.user.gender)

  // const getuser = async()=>{
  //   try{
  //     const id = currentUser.data.user._id
  //     const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/getuser/${id}`)


  //     if(res?.data.success){
  //       setFirstName(res.data.user.firstName)
  //       setLastName(res.data.user.lastName)
  //       setEmail(res.data.user.email)
  //       setGender(res.data.user.gender)
  //       setdateofbirth(res.data.user.dateofbirth)
  //       setAbout(res.data.user.about)
  //       setcontact(res.data.user.contactNumber)
  //       setaddress(res.data.user.address)
  //       setImage(res.data.user.image)
  //       console.log("res is",res)

  //     }
  //   }
  //   catch(err){
  //     console.log(err)
  //   }
  // }

  useEffect(()=>{
    const getuser = async()=>{
      try{
        const id = currentUser.data.user._id
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
          setImage(res.data.user.image)
          console.log("res is",res)
  
        }
      }
      catch(err){
        console.log(err)
      }
    }

    getuser()
  },[currentUser.data.user._id])
//  getuser()

  return (
    <div className='min-h-screen  flex items-center justify-center flex-col'>
    <div className='border flex flex-col justify-center items-center mx-3  min-w-40 '>
     <div>
     <img src={image} alt="" className=' flex h-20 rounded-full w-20 justify-center m-3' />

     </div>
     

     <div className=' m-3 space-y-2 '>
     <p><span className='   font-bold'>Name: </span>{firstName} {lastName}</p>
     <p><span className='   font-bold'>Email: </span>{email}</p>
     <p><span className='   font-bold'>Address: </span>{address}</p>
     <p><span className=' font-bold'>Gender: </span>{gender}</p>
     <p><span className=' font-bold'>Dateofbirth: </span>{dateodbirth}</p>
     <p><span className=' font-bold'>About: </span>{about}</p>
     <p><span className=' font-bold'>Contact No.: </span>{contact}</p>
     </div>
    </div>
     <button className=' mt-5 bg-blue-300 rounded-sm p-1  text-red-500 hover:bg-blue-700 transition-all duration-500 ' onClick={()=>navigate('profilecreation')}>Update</button>
 </div>
  )
}

export default Dashboard
