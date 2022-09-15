import { useState } from 'react';
import useDebounceValue from '../hooks/use-debounced-value';
import { useFetch } from '../hooks/use-fetch';
import AutoCompleteInput from './AutoCompleteInput';
import ResultsList from './ResultsList';

interface Props {
  value: string;
  onChange: (value: string) => void;
  url: string;
}

const AutoComplete = ({ value, onChange, url }: Props) => {
  const [autoCompleted, setAutoCompleted] = useState<boolean>(false);
  const debouncedValue: string = useDebounceValue<string>(value, 500);
  const { data, loading } = useFetch(
    `${url}${debouncedValue}`,
    debouncedValue,
    autoCompleted
  );

  function handleAutoComplete(text: string) {
    setAutoCompleted(true);
    onChange(text);
  }

  function handleInput(value: string) {
    setAutoCompleted(false);
    onChange(value);
  }

  return (
    <>
      <AutoCompleteInput filter={value} setFilter={handleInput} />
      {loading ? (
        <span className="item" data-testid="loading-indicator">
          Loading ....
        </span>
      ) : (
        <ResultsList
          results={!autoCompleted ? data : []}
          filter={debouncedValue}
          handleAutoComplete={handleAutoComplete}
          autoCompleted={autoCompleted}
        />
      )}
    </>
  );
};

export default AutoComplete;
