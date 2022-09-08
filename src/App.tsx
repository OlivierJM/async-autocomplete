import { useState } from 'react';
import AutoCompleteInputField from './components/AutoCompleteInput';
import ResultsList from './components/ResultsList';
import { useFetch } from './hooks/use-fetch';
import useDebounceValue from './hooks/use-debounced-value';
import { todoUrl } from './constants';
import './styles/App.css';

function App() {
  const [filter, setFilter] = useState<string>('');
  const [autoCompleted, setAutoCompleted] = useState<boolean>(false);
  const debouncedValue: string = useDebounceValue<string>(filter, 500);
  const { data, loading } = useFetch(
    `${todoUrl}${debouncedValue}`,
    debouncedValue,
    autoCompleted
  );

  const handleAutoComplete = (text: string) => {
    setAutoCompleted(true);
    setFilter(text);
  };

  const handleInput = (value: string) => {
    setFilter(value);
    setAutoCompleted(false);
  };

  return (
    <div className="app-wrapper">
      <h1 className="title">Auto Complete for Todos</h1>
      <AutoCompleteInputField filter={filter} setFilter={handleInput} />
      <br />
      {loading ? (
        <span className="item" data-testid="loading-indicator">Loading ....</span>
      ) : (
        <ResultsList
          results={!autoCompleted ? data : []}
          filter={debouncedValue}
          handleAutoComplete={handleAutoComplete}
          autoCompleted={autoCompleted}
        />
      )}

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
