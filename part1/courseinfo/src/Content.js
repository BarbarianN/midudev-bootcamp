import React from 'react'

const Content = (promp) => {
    const {parts} = promp
    return(
      <p>{parts.name} {parts.exercises}</p>
    )
  }

  export default Content;