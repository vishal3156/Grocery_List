import React from 'react';

const ColorSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button onClick={() => selectNextBackground({background: background})}>
      {/* label should come here */}
    </button>
  )
}
export default ColorSelector;