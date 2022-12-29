import React from 'react';

const CouresCategory = ({courses}) => {
    const [newCategory, setNewCategory] = 
    console.log(courses)
    return (
        <div>
            {
                courses.map(course => {return(
                    <div>
                        <a key={course.id}className="link link-hover">{course.category}</a>
                    </div>

                )})
            }
        </div>
    );
};

export default CouresCategory;