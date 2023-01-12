import React from 'react'

const Input = ({ name, value, onChange, errorMessage}) => (
    <div>
        <label>{name}</label>
        <input value={value} onChange={onChange}/>
        <p style={{ color: 'red' }}>{errorMessage}</p>
    </div>
);


export default Input;