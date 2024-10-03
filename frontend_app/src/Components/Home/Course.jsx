import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaUserTie } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { AiOutlineFundView } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import img from './../../assets/entreprise-informatique-scaled.jpeg'
import { Link } from 'react-router-dom';

function Course(props) {
  return (
    <div className="w-[500px] min-h-[460px]" style={{
      backgroundColor: 'black', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', margin:'auto' }}>
        <div style = {{ position: 'relative' }
    } >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', position: 'absolute', marginLeft: '10px' }}>
          <FaStar size="20" fill='yellow'> </FaStar>
          <p style={{ color: 'yellow' }}>4.4</p>
        </div>
        <img src={img} style={{ width: "100%", height: "200px", borderRadius: '10px' }}></img>
      </ div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <h1 style={{ margin: '0px', fontFamily: 'Arial, Helvetica, sans-serif' }}>{props.course.title}</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FaUserTie size="20" />
          <span style={{fontFamily: 'Arial, Helvetica, sans-serif' }}>{props.course.instructor}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <MdAccessTimeFilled size="20" />
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}> {props.course.schedule}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <AiOutlineFundView size="20" />
          <span>{props.course.description}</span>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ width: '140px', paddingBottom: '15px', paddingTop: '15px', textAlign: 'center', borderRadius: '10px', border: '2px solid #EC4C63', fontFamily: 'Arial, Helvetica, sans-serif'}}>
          <Link to='/modules' style={{ textDecoration: 'none' }}>WATCH NOW</Link>
        </p>
        <p style={{ width: '140px', paddingBottom: '15px', paddingTop: '15px', textAlign: 'center', backgroundColor: '#EC4C63', borderRadius: '10px', border: '2px solid #EC4C63', color: 'black', fontFamily: 'Arial, Helvetica, sans-serif' }}>SAVE FOR LATER</p>
      </div>
    </div>
  )
}

export default Course