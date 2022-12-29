import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <h1>Category</h1>
        <div>
            {
                courses.map(course => <c)
            }
      
        </div>
  </div>
</div>
    );
};

export default Courses;