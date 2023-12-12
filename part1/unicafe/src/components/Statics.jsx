import StatiscLine from "./StatiscLine";

/* eslint-disable react/prop-types */
export default function Statics({ good, neutral, bad }) {

  let total = good + neutral + bad;

  if (good + neutral + bad == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <StatiscLine text={"good"} value={good}/>
      <StatiscLine text={"neutral"} value={neutral}/>
      <StatiscLine text={"bad"} value={bad}/>
      <StatiscLine text={"total"} value={total}/>
      <StatiscLine text={"average"} value={(good - bad) / total}/>
      <StatiscLine text={"positive"} value={((good * 100) / (total))+"%"}/>
    
    </>
  );
}
