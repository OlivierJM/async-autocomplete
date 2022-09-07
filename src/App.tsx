import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import ResultsList from './components/ResultsList';

function App() {
  const [filter, setFilter] = useState<string>("")
  return (
    <div className="App">
      <main className="App-main">
        <InputField filter={filter} setFilter={setFilter} />
        <ResultsList results={['oli', 'some']} filter={filter} />
      </main>
    </div>
  );
}

export default App;
