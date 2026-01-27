import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Swal  from 'sweetalert2';

function CreateUser() {

  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [age,setage]=useState("")

  const navigate=useNavigate()

  const submit=async(e)=>{
    e.preventDefault()
   Swal.fire({
              title: "Do you want to save the changes?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Save",
              denyButtonText: `Don't save`
              }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
    axios.post("http://localhost:3001/createserver", { name, email, age })
    .then(result => {
      Swal.fire("Saved!", "", "success");
      console.log(result.data)
                   setname("")
                  setemail("")
                  setage("")
      navigate('/loginn')
    })
  
    .catch(err =>console.log(err));
} else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          }
      });


  }
  return (
     <>
<div className="min-h-screen bg-slate-500 flex justify-center items-center px-4 sm:px-6">
  <div
    className="
      w-full 
      max-w-md sm:max-w-lg 
      bg-white 
      rounded-2xl 
      shadow-xl 
      p-4 sm:p-6 md:p-8
    "
  >
    <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 mb-4 sm:mb-6 text-center">
      Add User
    </h2>

    <form onSubmit={submit} className="space-y-4">

      <div>
        <label className="block text-sm sm:text-base text-slate-600 mb-1">
          Name
        </label>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          className="
            w-full px-3 sm:px-4 py-2 
            border border-slate-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-slate-400
          "
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm sm:text-base text-slate-600 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          placeholder="Enter email"
          className="
            w-full px-3 sm:px-4 py-2 
            border border-slate-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-slate-400
          "
          onChange={(e) => setemail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm sm:text-base text-slate-600 mb-1">
          Age
        </label>
        <input
          type="number"
          value={age}
          placeholder="Enter age"
          className="
            w-full px-3 sm:px-4 py-2 
            border border-slate-300 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-slate-400
          "
          onChange={(e) => setage(e.target.value)}
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="
            w-full sm:w-auto
            bg-slate-600 hover:bg-slate-700 
            text-white font-medium 
            px-6 py-2 rounded-lg transition
          "
        >
          Submit
        </button>
      </div>

    </form>
  </div>
</div>


    </>
  )
}

export default CreateUser