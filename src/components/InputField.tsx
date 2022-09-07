import { ChangeEvent } from 'react';
import { InputProps } from '../types';

const InputField = ({ setFilter, filter }: InputProps) => {
  return (
    <input
      type="search"
      placeholder="Type your search here"
      onChange={(event: ChangeEvent<HTMLInputElement>) => setFilter(event.target.value)}
      value={filter}
      style={{
        borderRadius: 10,
        padding: 10,
        width: '40%',
        height: 80,
        fontSize: 24,
      }}
    />
  );
};

export default InputField;
