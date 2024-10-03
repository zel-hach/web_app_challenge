import React, { useEffect, useState } from 'react';
import Course from './Course';
import axios from 'axios';

export default function ListeOfCourse(props) {
   

    return (
        <div className="w-full flex flex-col gap-5">
            <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-2">
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
