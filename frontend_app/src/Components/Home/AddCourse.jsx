import React, { useState } from 'react'

export default function AddCourse(props) {

  const [title,setTitle] = useState("");
  const [teacher,setTeacher] = useState("");
  const [description, setDescription] = useState("");
  const [schedule,setSchedule] = useState("");


 

  const AddCourse = async() => {
    const dateNow = new Date();
    const dateOptions = { weekday: 'long' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
    setSchedule(dateNow.toLocaleDateString(undefined, dateOptions) + "  " + dateNow.toLocaleTimeString(undefined, timeOptions))
    const token = sessionStorage.getItem("token");
    try{
      const response = await fetch(`http://localhost:3001/courses`,
        {
          method:'POST',
          headers:{
            Authorization: `Bearer ${token}`,
            'Content-type':'application/json'},
          body:JSON.stringify({
            title:title,
            description:description,
            instructor:teacher,
            schedule:schedule
          })
        }
      )
      if (!response.ok)
      {
        throw new Error("fieled to fetch data"); 
      }
      else
        alert("courses is Added");
      props.setAddCourse(false)
    }catch(e)
    {
      console.log(e);
    }

  }

  return (
    <div className='m-3 bg-[#1c2228] text-[#1fb5a9] p-10 rounded '>
      <div >
        <form className='flex  justify-center sm:flex-col gap-3' onSubmit={AddCourse}>
          <div className='flex gap-3 items-center justify-between'>
            <label>title of course</label>
            <input className='h-10 p-3' type='text' onChange={(e) => {setTitle(e.target.value)}}></input>
          </div>
          <div className='flex gap-3 items-center justify-between'>
            <label>name of teacher</label>
            <input className='h-10 p-3' type='text' onChange={(e) => {setTeacher(e.target.value)}}></input>
          </div>
          <div className='flex gap-3 items-center justify-between'>
            <label>description</label>
            <input className='h-10 p-3' type='text' onChange={(e) =>{setDescription(e.target.value)}}></input>
          </div>
          <button className='bg-[#1fb5a9] text-slate-700 py-3 px-2 rounded'>Add Course</button>
        </form>
      </div>
    </div>
  )
}
