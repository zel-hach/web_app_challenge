import React, { useEffect, useState } from 'react'
import ListeOfCourse from './ListeOfCourse'
import AddCourse from './AddCourse'
import Popup from 'reactjs-popup';
import axios from 'axios';


export default function Home() {
  const [addC,setAddC] = useState(false);
  const [text,setText] = useState("");
  const [filtersearch ,setFilterSearch] = useState([]);

  const onclose = () =>{
    setAddC(false);
  }

  const openPopup = () =>{
    setAddC(true);
  }

  useEffect(() => {
    const uploadFile = async () => {
        try {
            const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });

            const formData = new FormData();
            formData.append('file', jsonBlob, 'courses_data.json'); 
            const uploadResponse = await axios.post('http://localhost:3001/courses/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('File uploaded successfully:');
                   } catch (error) {
            // console.error('Error uploading file:', error);
        }
    };
    uploadFile();
}, []);

const [courses, setCourses] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);


const fetchCourses = async () => {
    setLoading(true);
    try {
        const response = await axios.get(`http://localhost:3001/courses?page=${page}`);
        console.log("response: ",response);
        if (Array.isArray(response.data.data)) {
            setCourses(prev => [...prev, ...response.data.data]); 
        } else {
            console.error('Unexpected response structure:', response.data.data);
        }
    } catch (error) {
        console.error('Error fetching courses:', error);
    } finally {
        setLoading(false);
    }
};

useEffect(() => {
    fetchCourses();
}, [page]);

const setSearch = (e) => {
   setText(e.target.value);
}

const [isSearch,setIsSearch] = useState(false)
const SearchCourse = () =>{
    try{
      const filter = courses.filter((fil) => {
        return (fil.instructor == text );
      })
      setFilterSearch(filter)
      setIsSearch(true);
    }catch(e)
    {
      console.log(e);
    }
}

  return (
    <div className='m-auto'>
      <div className='flex justify-between items-center'>
        <h1 className=' flex justify-start cursor-pointer bg-[#1fb5a9] rounded p-3' onClick={openPopup}>New course</h1>
        <div className='flex gap-1'>
        <input type='text' placeholder="search" className='p-2' onChange={setSearch}></input>
        <button className='p-2 rounded bg-[#1fb5a9]' onClick={SearchCourse}>search</button>
        </div>
      </div>
      {
        isSearch ?
        <ListeOfCourse courses={filtersearch} setCourses={setCourses} setPage={setPage} loading={loading}> </ListeOfCourse>:
         <ListeOfCourse courses={courses} setCourses={setCourses} setPage={setPage} loading={loading}> </ListeOfCourse>
      }
      <Popup open={addC} closeOnDocumentClick onClose={onclose}>
      <AddCourse addCourse={addC} setAddCourse={setAddC}></AddCourse>
      </Popup>
    </div>
  )
}