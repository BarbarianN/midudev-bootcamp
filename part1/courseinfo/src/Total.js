import React from 'react'

const Total = (promp) => {
    const {e1} = promp
    const total = Array.from(e1).reduce((acc, e1) => acc + e1.exercises, 0);
    
    return (
      <strong><p>Total of exercises {total}</p></strong>
    )
  }
  
  export default Total;