import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const courses = useLoaderData()
    return (
        <div className='md:grid grid-cols-3 gap-2'>
            {
               courses.map(course=>{
                   return(
                <div className="card card-compact w-90 bg-base-100 shadow-2xl shadow-indigo-500/40">
                     <figure className="px-10 pt-10">
                         <img src={course.logo} alt={course.name} className="rounded-xl" />
                     </figure>
                     <div className="card-body items-center text-center">
                         <h2 className="card-title">{course.name}</h2>
                         <p>If a dog chews shoes whose shoes does he choose?</p>
                         <div className="card-actions">
                         <button className="btn btn-primary">Buy Now</button>
                         </div>
                     </div>
                 </div>
                   )
            })
        }

        </div>
    );
};

export default Home;