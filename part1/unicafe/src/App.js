import React, { useState } from 'react'

const App = () => {
  
  const [good, setGood] = useState({
    goodCounter: 0,
    value: 1
  })
  const [neutral, setNeutral] = useState({
    neutralCounter: 0,
    value: 0
  })
  const [bad, setBad] = useState({
    badCounter: 0,
    value: -1
  })


  const handleClickGood = () => {
    setGood({
      ...good,
      goodCounter: good.goodCounter + 1,
  })
  }

  const handleClickNeutral = () => {
    setNeutral({
      ...neutral,
      neutralCounter: neutral.neutralCounter + 1,
  })
  }

  const handleClickBad = () => {
    setBad({
      ...bad,
      badCounter: bad.badCounter + 1,
  })
  }

  const total = (good.goodCounter + neutral.neutralCounter + bad.badCounter)
  
  const WarningNotUsed = () => {return <p1>No Feedback Given</p1>}

  const Statics =() => {
    const positive = (good.goodCounter * 100) / total
    const value1 = good.value * good.goodCounter
    const value2 = neutral.value * neutral.neutralCounter
    const value3 = bad.value * bad.badCounter
    const sume = value1 + value2 + value3
    const avg = sume / total 

    return (
      <div>
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good.goodCounter}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral.neutralCounter}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad.badCounter}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{total}</td>
          </tr>
          <tr>
            <td>Average</td>
            <td>{avg.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>{positive.toLocaleString()} %</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }


  return (
    <div>
        <h1>Give Feedback</h1>
        <button onClick={handleClickGood}>Good</button>
        <button onClick={handleClickNeutral}>Neutral</button>
        <button onClick={handleClickBad}>Bad</button>
        <p/>
        <h1>Statistics!!</h1>
        <p/>
        {total === 0 ? 
            (<WarningNotUsed />)
            : (<Statics />)
        }
        
    </div>
  )
}

export default App