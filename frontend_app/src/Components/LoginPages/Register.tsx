import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register(props:any) {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const navigate = useNavigate();
    const go_To_login = () =>{
        props.setLogin(true);
    }

    const Register = async(e:any) => {
      e.preventDefault();
      try{
        const response = await fetch("http://localhost:3000/users/register",{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({
              userName,
              email,
              phone,
              password
            }) 
        })
        console.log(response);
        if (response.ok)
          {
            const data = await response.json();
            console.log(data);
            if(data != 0)
              {
                props.setLogin(true);
                navigate('/');
              }

          }
      }catch(e){
        console.log(e);
      }
    }

  return (
    <div className='flex flex-col items-center gap-7 w-full m-12'>
      <form className='w-full flex flex-col items-center gap-7' onSubmit={Register}>
    <div className='w-full flex flex-col '>
      <label className='invisible'>Username</label>
      <input type='text' placeholder='Username' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>setUserName(e.target.value)}></input>
    </div>
    <div className=' w-full flex flex-col '>
      <label className='invisible'>Email</label>
      <input type='email' placeholder='Email' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>setEmail(e.target.value)}></input>
    </div>
    <div className='w-full flex flex-col'>
      <label className='invisible'>Phone</label>
      <input type='phone' placeholder='Phone' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>setPhone(e.target.value)}></input>
    </div>
    <div className='w-full flex flex-col'>
        <label className='invisible'>Password</label>
        <input type='password' placeholder='Password' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>setPassword(e.target.value)}></input>
    </div>
    <div className='w-full flex justify-center'>
      <button className='w-full p-3 bg-zinc-950 rounded' >sign up</button>
    </div>
    <div>
      <p>Have an account ? <span className='text-slate-950 font-bold cursor-pointer' onClick={go_To_login}>log in</span></p>
    </div>
      </form>
  </div>
  )
}
