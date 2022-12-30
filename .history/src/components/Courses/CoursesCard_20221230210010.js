import React from 'react';

const CoursesCard = ({course}) => {

    return (
                <div className="card w-90 bg-base-100 shadow-2xl shadow-indigo-500/40">
                    <figure className="px-10 pt-10">
                    <img src={course.logo} alt={course.name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{course.name}</h2>
                        <p className='text-ellipsis'>{course.description.substring(start, end)}</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
        
    );
};

export default CoursesCard;