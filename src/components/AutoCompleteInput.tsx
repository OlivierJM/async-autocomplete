import { ChangeEvent } from 'react';
import { InputProps } from '../types';
import '../styles/autocomplete-input.css';

const AutoCompleteInput = ({ setFilter, filter }: InputProps) => {
  return (
    <div className="autocomplete-container">
      <input
        type="autocomplete"
        placeholder="Type here and click on the results to autocomplete"
        className="autocomplete-container-input"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setFilter(event.target.value)
        }
        value={filter}
      />
    </div>
  );
};

export default AutoCompleteInput;
