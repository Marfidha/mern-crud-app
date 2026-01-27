import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function Users() {
    
   const [user ,Setuser]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => Setuser(result.data))
        .catch(err => console.log(err));
        
    },[])

    const handleDelete=(id) =>{

     

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

axios.delete('http://localhost:3001/deleteuser/'+id)
        .then(res =>{ console.log(res)
            window.location.reload()
        })
        
        .catch(err => console.log(err))

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});



        // axios.delete('http://localhost:3001/deleteuser/'+id)
        // .then(res =>{ console.log(res)
        //     window.location.reload()
        // })
        
        // .catch(err => console.log(err))
    }
  return (
    <>
<div className="min-h-screen bg-slate-500 flex justify-center items-center px-4 sm:px-6">
  <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-4 sm:p-6">

    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 border-b pb-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-slate-700">
        User Management
      </h1>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to="/create"
          className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition text-center"
        >
          + Add User
        </Link>

        <Link
          to="/"
          className="bg-white border border-slate-400 text-slate-700 hover:bg-slate-100 px-4 py-2 rounded-lg transition text-center"
        >
          Logout
        </Link>
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-[640px] w-full border-collapse rounded-lg overflow-hidden">
        <thead className="bg-slate-100">
          <tr>
            <th className="text-left px-4 sm:px-6 py-3 text-slate-700 font-medium">
              Name
            </th>
            <th className="text-left px-4 sm:px-6 py-3 text-slate-700 font-medium">
              Email
            </th>
            <th className="text-left px-4 sm:px-6 py-3 text-slate-700 font-medium">
              Age
            </th>
            <th className="text-center px-4 sm:px-6 py-3 text-slate-700 font-medium">
              Actions
            </th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {user.map((user, index) => (
            <tr key={index} className="hover:bg-slate-50 transition">
              <td className="px-4 sm:px-6 py-3 text-slate-800">
                {user.name}
              </td>

              <td className="px-4 sm:px-6 py-3 text-slate-600 break-all">
                {user.email}
              </td>

              <td className="px-4 sm:px-6 py-3 text-slate-600">
                {user.age}
              </td>

              <td className="px-4 sm:px-6 py-3">
                <div className="flex flex-col sm:flex-row justify-center gap-2">
                  <Link
                    to={`/update/${user._id}`}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-sm transition text-center"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-slate-400 hover:bg-slate-500 text-white px-3 py-1.5 rounded-md text-sm transition"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>
</div>
    </>
  )
}

export default Users