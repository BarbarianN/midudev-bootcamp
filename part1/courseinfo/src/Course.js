import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const Course = (promp) => {
    const {course} = promp
    // console.log(course.parts.exercises.reduce((a, b) => a + b, 0));
    return(
      <div>
        <Header dtl={course.name}/>
        {course.parts.map(parts => 
        <Content key={parts.id} parts={parts} />
            
        )}
        
        <Total e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises} />
      </div>
    )
  }

export default Course;