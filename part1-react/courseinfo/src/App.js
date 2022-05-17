import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const course = {
  course: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}


const Main = () => {
  return(
    <div>
      <Header dtl={course.course}/>
      <Content partaux={course.parts} />
      <Total e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises} />
    </div>
  )
}


const App = () => {

  return (
    <Main />
  )
}

export default App