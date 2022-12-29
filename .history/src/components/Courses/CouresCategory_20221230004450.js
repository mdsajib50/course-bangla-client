import React, { useState } from 'react';

const CouresCategory = ({courses}) => {
    const [newCategory, setNewCategory] = useState([])
    const category = courses.map(course => course.category)
    const categories = [... ]
    console.log(category)
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