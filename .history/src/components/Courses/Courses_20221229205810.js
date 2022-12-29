import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
           {
               courses.map(course=><CoursesCard></CoursesCard>)
            
            }
        <div className='w-1/6'>
                              <h2>Category</h2>
                              <p>{course.category}</p>
                          </div>
        
    </div>
    );
};

export default Courses;