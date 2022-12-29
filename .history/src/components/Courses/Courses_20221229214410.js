import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className=' grid gap-2 grid-cols-1 md: grid-clos-2'> 
           {
               courses.map(course=><CoursesCard key={course.id} course={course}></CoursesCard>)
            
            }
            <div className="divider divider-horizontal"></div>
                <div>
                    <h2>Category</h2>
                </div>
        </div>
    );
};

export default Courses;