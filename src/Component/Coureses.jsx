import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";

const Coureses = ({details}) => {
    // console.log(details);
    const [course, setCourse ]= useState([])
    useEffect(()=>{
        fetch('Course.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    } , [])
    // console.log(course);
    return (
            <div className='w-3/4 grid grid-cols-3 gap-4 items-center'>
                {
                    course.map(c => <Course
                         key={c.id} 
                         details={details}
                         course={c}></Course>)
                }
            </div>
    );
};

export default Coureses;