import React from 'react';

const CouresCategory = ({courses}) => {
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <a key={course.id}className="link link-hover">{I'm a simple link}</a>)
            }
        </div>
    );
};

export default CouresCategory;