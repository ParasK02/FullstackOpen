/* eslint-disable react/prop-types */
import { useState } from 'react';

const Button = ({text,count,setCount}) =>{

  const handleClick = () =>{
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>{text}</button>
  );

}

const StatisticLine = ({text,props}) =>{
  return (
    <tr>
      <td>{text}</td>
      <td>{props}</td>
    </tr>
  );

}

const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral;

  const average = () => {
    return (props.good - props.bad) / total;
  };
  
  const positive = () => {
    return (props.good / total) * 100;
  };

  return (
    total > 0? 
    
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={"good"} props={props.good}/>
          <StatisticLine text={"neutral"} props={props.neutral}/>
          <StatisticLine text={"bad"} props={props.bad}/>
          <StatisticLine text={"all"} props={total}/>
          <StatisticLine text={"average"} props={average()}/>
          <StatisticLine text={"positive"} props={positive() + "%"}/>
        </tbody>
      </table>
      </div>
     
    
     :
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const props = { good, neutral, bad };

  return (
    <div>
      <h1>give feedback</h1>
     
      <Button text="good" count={good} setCount={setGood}/>
      <Button text="neutral" count={neutral} setCount={setNeutral}/>
      <Button text="bad" count={bad} setCount={setBad}/>
      <Statistics {...props} />
    </div>
  );
};

export default App;
