import React, { useState } from 'react';

const CouresCategory = ({courses}) => {
    const [newCategory, setNewCategory] = useState([])
    const category = courses.map(c)
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