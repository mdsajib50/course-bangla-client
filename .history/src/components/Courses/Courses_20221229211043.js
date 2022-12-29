import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className='flex '>
           {
               courses.map(course=><CoursesCard key={course.id} course={course}></CoursesCard>)
            
            }
        
        
    </div>
    );
};

export default Courses;