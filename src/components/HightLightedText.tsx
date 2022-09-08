import { HighlightedTextProps } from '../types';

const HighlightedText = ({ text, match, handleAutoComplete }: HighlightedTextProps) => {
  const words = text.split(new RegExp(`(${match})`, 'gi'));

  return (
    <p className="todo-item todo-item-status" onClick={() => handleAutoComplete(text)}>
      {words.map((word: string) =>
        word.toLowerCase() === match.toLowerCase() ? <mark>{word}</mark> : word
      )}
    </p>
  );
};

export default HighlightedText;
