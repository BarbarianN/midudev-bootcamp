import React from 'react'
import Header from './Header.js'
import Content from './Content.js'
import Total from './Total.js'

const Course = (promp) => {
    const {course} = promp
    
    return(
      <div>
        <h1>Web development curriculum</h1>
        {course.map((course) =>
            <div key={course.id}>
              <Header  dtl={course.name}/>
              {course.parts.map(parts => 
                 <Content key={parts.id} parts={parts}/>
              )}
              <Total e1={course.parts} />
            </div>
        )}
      </div>
    )
  }

export default Course;