import React from 'react'

const Total = (promp) => {
    const {e1} = promp
    const {e2} = promp
    const {e3} = promp
    return (
      <p>Number of exercises {e1 + e2 + e3}</p>
    )
  }
  
  export default Total;