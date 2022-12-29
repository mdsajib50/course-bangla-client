import React from 'react';

const CouresCategory = ({courses}) => {
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => <a key={course.id}className="link link-hover">{`${course.category}</`}</a>)
            }
        </div>
    );
};

export default CouresCategory;