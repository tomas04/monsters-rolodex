import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}>
    </input>
);

export default SearchBox;