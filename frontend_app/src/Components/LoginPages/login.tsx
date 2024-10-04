import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props:any) {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const go_to_Register = (e:any) => {
        e.stopPropagation();
        props.setLogin(false)
    }

    const Login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, 
                    password 
                })
            });
    
            const data = await response.json();
            console.log("data : ",data);
            sessionStorage.setItem("token",data.accessTocken);
            if (response.ok) {
                if (data.message === "succes") {
                    navigate("/Home");
                } else {
                    alert("you are not registered ,can you register please !")
                    console.log("Login failed: Invalid credentials");
                }
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    };
    
    return (
        <div className='flex flex-col items-center m-12 w-full'>
        <form className='w-full flex flex-col items-center gap-7' onSubmit={Login}>
            <div className='w-full flex flex-col'>
                <label className='invisible'>Email</label>
                <input type='text' placeholder='Email' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div className='w-full flex flex-col'>
                <label className='invisible'>Password</label>
                <input type='password' placeholder='Password' className='rounded p-2 bg-inherit border-b-2 outline-none' onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div className='w-full flex justify-center'>
                <button className='p-3 bg-zinc-950 rounded w-full' >Log in</button>
            </div>
            <div className='w-full'>
                <p>create new account <span className='text-slate-950 font-bold cursor-pointer' onClick={go_to_Register}>sign up</span></p>
            </div>
        </form>
        </div>
    )
}
