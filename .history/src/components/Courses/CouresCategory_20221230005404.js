import React, { useState } from 'react';

const CouresCategory = ({courses}) => {
    const [newCategory, setNewCategory] = useState([])
    const category = courses.map(course => course.category)
    const categories = [...new Set(category)]
    console.log(categories)
    return (
        <div>
            {
                categories.map(c => {return(
                    <div>
                        <a key={course.id}className="link link-hover">{course.category}</a>
                    </div>

                )})
            }
        </div>
    );
};

export default CouresCategory;