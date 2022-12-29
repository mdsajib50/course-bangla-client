import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className='flex w-full'> 
           {
               courses.map(course=><CoursesCard key={course.id} course={course}></CoursesCard>)
            
            }
            <div className="divider divider-horizontal"></div>
             <h2>Category</h2>
        </div>
    );
};

export default Courses;