import React from 'react'

const Content = (promp) => {
    const {parts} = promp
    console.log("entre a content")
    console.log(parts)
    return(
    <div>
      <p>
            {parts.name} {parts.exercises}
          </p>
    </div>
    )
  }

  export default Content;