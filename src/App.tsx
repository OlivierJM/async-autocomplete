import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';

function App() {
  const [filter, setFilter] = useState<string>("")
  return (
    <div className="App">
      <main className="App-main">
        <InputField filter={filter} setFilter={setFilter} />
      </main>
    </div>
  );
}

export default App;
