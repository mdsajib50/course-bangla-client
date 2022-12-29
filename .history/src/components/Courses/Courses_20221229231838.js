import React from 'react';
import { useLoaderData } from 'react-router';
import CoursesCard from './CoursesCard';
import CourseCategory from './CouresCategory';

const Courses = () => {
   const courses = useLoaderData()
  
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
        <h1>Category</h1>
        <CourseCategory courses={co}></CourseCategory>
        <div className='mt-12 ml-16 grid gap-6 grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
            {
                courses.map(course => <CoursesCard key={course.id} course={course}></CoursesCard>)
            }
      
        </div>
  </div>
</div>
    );
};

export default Courses;