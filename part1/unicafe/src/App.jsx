import { useState } from "react";
import Statics from "./components/Statics";
import Button from "./components/Button";

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onclick={() => setGood(good + 1)} text="good" />
      <Button onclick={() => setBad(bad + 1)} text="bad" />
      <Button onclick={() => setNeutral(neutral + 1)} text="neutral" />

      <h2>stastics</h2>
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
