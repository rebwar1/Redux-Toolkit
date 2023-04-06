import { useState } from 'react';
import Counter from './components/counter/counter';

function App() {
  
  const [counter , setCounter ] = useState(0);
  const [counterTwo , setCounterTwo ] = useState(0);

  
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter}/>
      <Counter counter={counterTwo} setCounter={setCounterTwo}/>
    </div>
  );
}

export default App;
