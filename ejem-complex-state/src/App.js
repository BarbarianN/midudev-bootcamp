import { useState  } from "react"

const App = () => {
  //const [left, setLeft] = useState(0)
  //const [right, setRight] = useState(0)
  const [counters,setCounters] = useState({
    left: 0,
    right: 0,
    mensaje: "probando sets"
  })

  const WaringNotUsed = () => {
    return <h1>Todavia no se esta utilizando el contador</h1>
  }

  const ListOfClicks = ({clicks}) => {
    return(
      <p>{clicks.join(", ")}</p>
    )
  }

  const [clicks,setClicks] = useState([])

  const handleClickLeft =() => {
    setCounters({
      ...counters,
      left: counters.left +1,
    })
    setClicks((prevClicks) => [...clicks, "L"])
  }

  const handleClickRight =() => {
    setCounters({
      ...counters,
      right: counters.right +1,
    })
    setClicks((prevClicks) => [...clicks, "R"])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {counters.right}
      <p>Total de Clicks : {clicks.length}</p>
      <p>{counters.mensaje}</p>
      {clicks.length === 0 ? (
       <WaringNotUsed />
       ) : (
       <ListOfClicks clicks={clicks} />
      )}
    </div>
  )
}

export default App;