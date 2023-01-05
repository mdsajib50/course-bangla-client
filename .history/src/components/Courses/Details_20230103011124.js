import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const course = useLoaderData()
    return (
        <div className="card w-3/5 mx-auto mb-8 bg-base-100 shadow-2xl shadow-indigo-500/40">
                    <figure className="px-10 pt-10">
                    <img src={course.logo} alt={course.name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{course.name}</h2>
                        <p className='text-ellipsis'>{course.description}</p>
                        <div className="card-actions">
                        <Link to={`/checkout/${course}`}><button className="btn btn-primary">Get premium access</button></Link>
                        </div>
                    </div>
        </div>
    );
};

export default Details;