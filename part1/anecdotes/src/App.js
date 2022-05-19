import { useState } from 'react'

const App = () => {
  const anecdotes = [
    {text: 'If it hurts, do it more often',
     votes: 3},
     {text: 'Adding manpower to a late software project makes it later!',
     votes: 2},
     {text: 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
     votes: 0},
     {text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
     votes: 1},
     {text: 'Premature optimization is the root of all evil.',
     votes: 0},
     {text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
     votes: 0},
     {text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
     votes: 0}
  ]
   
  const [selected, setSelected] = useState({
    index: 0,
  })

  const getRandomAnecdote = () => {
    console.log(selected.index)
    setSelected({
      ...selected,
      index: Math.floor(Math.random() *  anecdotes.length), 
    })
  }

  const getVote = () => {
    //console.log("votos L "{anecdotes[selected.index].votes}")
    console.log(anecdotes[selected.index].votes)
    anecdotes[selected.index].votes = anecdotes[selected.index].votes +1
  }

  return (
    <div>
      <p>{anecdotes[selected.index].text}</p>
      <p>has {anecdotes[selected.index].votes} votes</p>
      <br/>
      <button onClick={getVote}>vote</button>
      <button onClick={getRandomAnecdote}>next anecdote</button>
    </div>
  )
}

export default App