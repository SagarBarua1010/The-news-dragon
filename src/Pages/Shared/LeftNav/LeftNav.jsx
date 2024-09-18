import React, { useState } from 'react';

const LeftNav = () => {
    const[categories,setCategories] = useState([]);
    useState(() =>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))       
    },[])
    return (
        <div>
            <h2>Left Nav</h2>
        </div>
    );
};

export default LeftNav;