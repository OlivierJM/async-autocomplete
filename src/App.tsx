import { useState } from 'react';
import InputField from './components/SearchInput';
import ResultsList from './components/ResultsList';
import { useFetch } from './hooks/use-fetch';
import useDebounceValue from './hooks/use-debounced-value';
import './styles/App.css';
import { todoUrl } from './constants';


function App() {
  const [filter, setFilter] = useState<string>('');
  const debouncedValue: string = useDebounceValue<string>(filter, 500);
  const { data, loading } = useFetch(
    `${todoUrl}${debouncedValue}`,
    debouncedValue
  );

  return (
    <div className="app-wrapper">
      <h1 className="title">Search for Todos</h1>
      <InputField filter={filter} setFilter={setFilter} />
      <br />
      {loading ? (
        <span className="todo-item">Loading ....</span>
      ) : (
        <ResultsList results={data} filter={debouncedValue} />
      )}

      <footer>
        <p>
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
