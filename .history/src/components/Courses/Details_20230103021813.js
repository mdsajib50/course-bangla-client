import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Details = () => {
    const course = useLoaderData()
    const ref = React.createRef();
    return (
        
        <div className="card w-3/5 mx-auto mb-8 bg-base-100 shadow-2xl shadow-indigo-500/40">
            

<div>
    <ReactToPdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
    </ReactToPdf>
    <div style={{width: 500, height: 500, background: 'blue'}} ref={ref}/>
</div>
                    <figure className="px-10 pt-10">
                    <img src={course.logo} alt={course.name} className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{course.name}</h2>
                        <p className='text-ellipsis'>{course.description}</p>
                        <div className="card-actions">
                        <Link to={`/checkout/${course.id}`}><button className="btn btn-primary">Get premium access</button></Link>
                        </div>
                    </div>
        </div>
    );
};

export default Details;