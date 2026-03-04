import React, { useState } from 'react'
import bg from "../assets/image.png"
import bgs from "../assets/imggg.png"
import axios from "axios"
import API from "../api";
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2' 


function Login() {

     const navigate=useNavigate()
    const [email,setemail]=useState("")
      const [password,setpassword]=useState("")

      const handlesubmit=async()=>{
  
        const response=await API.post("/admin",{email,password})
        console.log(response);
        
        if(response.data.message=="done"){
        Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
           navigate('/loginn')
           
        }else{
          Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
          // alert("invalied cridential")
        }
        
    
        setemail("")
        setpassword("")
    }

  return (
    <> 
    

    <div style={{backgroundImage:`url(${bg})`}} className='w-full h-[100vh] bg-cover  flex justify-center items-center '> 
        <div className='w-[40%] h-[60%]  flex justify-center items-center '>
            <div style={{backgroundImage:`url(${bgs})`}} className='w-[90%] h-full flex justify-center items-center flex-col gap-3 rounded-2xl  bg-cover' >
                <h1 className='w-full h-[6vh] flex justify-center text-2xl font-bold text-amber-50'>Login</h1>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" className='bg-gray-200  w-[60%] h-[6vh] rounded-sm pl-[10px]' placeholder='Email' />  
                <input value={password} onChange={(e)=> setpassword(e.target.value)} type="text" className='bg-gray-200  w-[60%] h-[6vh] rounded-sm pl-[10px]' placeholder='password' /> 
                <button onClick={handlesubmit} className='bg-black text-white w-[60%] h-[6vh] rounded-sm' > login</button>
            </div>

        </div>
        
        
        
    </div>
    
     </>
  )
}

export default Login