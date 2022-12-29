import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    
    <div>
      
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Courses;