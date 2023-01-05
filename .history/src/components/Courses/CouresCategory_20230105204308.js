import React from 'react';

const CouresCategory = ({courses}) => {
    
    const category = courses.map(course => course.category)
    const categories = [...new Set(category)]
    
    return (
        <div>
            {
                categories.map(category => {return(
                    <div>
                        <a className="link link-hover">{category}</a>
                    </div>

                )})
            }
        </div>
    );
};

export default CouresCategory;