import { fireEvent, render, screen } from '@testing-library/react';
import AutoCompleteInput from '../../components/AutoCompleteInput';

describe('AutoComplete Input', () => {
  it('should render without breaking and show placeholder', () => {
    const props = {
      setFilter: jest.fn(),
      filter: 'some values'
    }
    render(<AutoCompleteInput { ...props }  />);
    const inputElement = screen.getByPlaceholderText(/Type here and click on the results to autocomplete/i);
    expect(inputElement).toBeInTheDocument();


    fireEvent.change(inputElement, {  target: { value: 'updated filter' } })
    expect(props.setFilter).toBeCalled()
  });

});

