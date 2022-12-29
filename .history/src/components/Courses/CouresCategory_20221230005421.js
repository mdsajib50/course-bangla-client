import React, { useState } from 'react';

const CouresCategory = ({courses}) => {
    const [newCategory, setNewCategory] = useState([])
    const category = courses.map(course => course.category)
    const categories = [...new Set(category)]
    console.log(categories)
    return (
        <div>
            {
                categories.map(category => {return(
                    <div>
                        <aclassName="link link-hover">{course.category}</aclassName=>
                    </div>

                )})
            }
        </div>
    );
};

export default CouresCategory;