import { fireEvent, render, screen } from '@testing-library/react';
import HighlightedText from '../../components/HightLightedText';

describe('HighLighted Text Component', () => {
  const props = {
    text: 'Some random text',
    match: 'some',
    handleAutoComplete: jest.fn()
  }
  it('should find matching text and mark it', () => {
    render(<HighlightedText {...props}  />);
    const markedWord = screen.getByTestId('marked-word');
    const otherText = screen.getByText(/random text/)
    expect(markedWord.textContent).toContain('Some');
    expect(otherText).toBeInTheDocument();
  });
  it('should handle an onClick when an element is clicked', () => {
    render(<HighlightedText {...props}  />);
    fireEvent.click(screen.getByTestId('item'))
    expect(props.handleAutoComplete).toBeCalled()
    expect(props.handleAutoComplete).toBeCalledWith("Some random text")
  });
});
