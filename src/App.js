import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Surprise from './Surprise';

function App() {
  const [showSurprise, setShowSurprise] = useState(false);

  return (
    <div>
      <button onClick = { () => setShowSurprise(true) }>Mostrat sorpresa</button>
      {showSurprise && <Surprise/>}
    </div>
  );
}

export default App;
