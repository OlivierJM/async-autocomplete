import { useState } from 'react';
import { todoUrl } from './constants';
import './styles/App.css';
import AutoComplete from './components/AutoComplete';

function App() {
  const [filter, setFilter] = useState<string>('');
  // TODO: Better to combine for a better packaging
  return (
    <div className="app-wrapper">
      <h1 className="title">Auto Complete for Todos</h1>
      <AutoComplete value={filter} onChange={setFilter} url={todoUrl} />
      <footer>
        <p data-testid="api-note">
          <b>Note: </b>We are querying an API from here{' '}
          <a
            href="https://jsonplaceholder.typicode.com/todos"
            target="_blank"
            rel="noreferrer"
          >
            https://jsonplaceholder.typicode.com/todos
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
