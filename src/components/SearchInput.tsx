import { ChangeEvent } from 'react';
import { InputProps } from '../types';
import '../styles/search-input.css';

const InputField = ({ setFilter, filter }: InputProps) => {
  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Type your search here"
        className="search-container-input"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setFilter(event.target.value)
        }
        value={filter}
      />
    </div>
  );
};

export default InputField;
