import React, { useEffect, useState } from 'react';
import Course from './Course';
import axios from 'axios';

export default function ListeOfCourse(props) {
   
    return (
        <div className="w-full flex-col gap-5">
            <div className="m-5 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {props.courses.map((course, index) => (
                    <Course key={index} course={course} />
                ))}
            </div>
            <button onClick={() => props.setPage(prev => prev + 1)} disabled={props.loading}>
                {props.loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
    );
}
