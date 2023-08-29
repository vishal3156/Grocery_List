import React from 'react';

function Square({ colorValue, clicked, setClicked }) {
  return (
    <section
        className='fix-box'
        onClick={() => setClicked(!clicked)}
        style={
            {backgroundColor: clicked ? colorValue : ""}}
    >
        {/* <p>{colorValue ? colorValue : "Empty value"}</p> */}
    </section>
  )
}

// Square.defaultProps = {
//     colorValue: "Empty value"
// }

export default Square;