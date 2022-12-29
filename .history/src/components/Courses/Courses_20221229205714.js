import React from 'react';
import { useLoaderData } from 'react-router';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
           {
               courses.map(course=>{
                   return <div>
                   
                          
                      </div>
            })
            
        }
        
        
    </div>
    );
};

export default Courses;