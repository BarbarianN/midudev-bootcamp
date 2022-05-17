import React from 'react'
import Parts from './Parts.js'

const Content = (promp) => {
    const {partaux} = promp
    console.log(partaux)
    return(
    <div>
      <Parts part={partaux[0].name} num1={partaux[0].exercises} />
      <Parts part={partaux[1].name} num1={partaux[1].exercises} />
      <Parts part={partaux[2].name} num1={partaux[2].exercises} />
    </div>
    )
  }

  export default Content;