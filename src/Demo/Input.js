import React from 'react';

function Input({ colorValue, setColorValue }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label className='subheading'>Add Color Name:</label>
        <input
            autoFocus
            type='text'
            placeholder='Add color name'
            required
            value={colorValue}
            onChange={(e) =>
                setColorValue(e.target.value)}
        />
        <h3>Hello</h3>  
    </form>
  )
}

export default Input;