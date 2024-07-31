import React from 'react'
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodCount = () => {
    setGood(good + 1)
  }
  const neutralCount = () => {
    setNeutral(neutral + 1)
  }
  const badCount = () => {
    setBad(bad + 1)
  }
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  return (
    <div>
    
      <h1>Give Feedback</h1>
      <button onClick={goodCount}>Good</button>
      <button onClick={neutralCount}>Neutral</button>
      <button onClick={badCount}>Bad</button>
    
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad} </p>
      <p>All {total}</p>
      <p>Average {isNaN(average) ? 0 : average}</p>
      <p>Positive {isNaN(positive) ? 0 : positive} </p>


    </div>
  )
}

export default App