import { ReactNode } from 'react';
import { InputProps } from '../types';

const InputField = ({ searchFilter, filter }: InputProps): ReactNode => {
  return (
    <input
      type="search"
      placeholder="type your search here"
      onChange={searchFilter}
      value={filter}
      style={{
        marginLeft: '40%',
        border: '1px gray solid',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        fontSize: 20,
      }}
    />
  );
};

export default InputField;
