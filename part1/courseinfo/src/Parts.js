import React from 'react'

const Parts = (promp) => {
    const {part} = promp
    const {num1} = promp
    return (
      <p>
          {part} {num1}
        </p>
    )
  }

  export default Parts;