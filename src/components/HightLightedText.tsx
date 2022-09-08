import { HighlightedTextProps } from '../types';

const HighlightedText = ({
  text,
  match,
  handleAutoComplete,
}: HighlightedTextProps) => {
  const words = text.split(new RegExp(`(${match})`, 'gi'));

  return (
    <p
      className="item item-status"
      onClick={() => handleAutoComplete(text)}
      data-testid="item"
    >
      {words.map((word: string, index) => (
        <span key={`${word}-${index}`}>
          {word.toLowerCase() === match.toLowerCase() ? (
            <mark data-testid="marked-word">{word}</mark>
          ) : (
            word
          )}
        </span>
      ))}
    </p>
  );
};

export default HighlightedText;
