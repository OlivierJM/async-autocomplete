import { HighlightedTextProps } from "../types";

const HighlightedText = ({ text, match }: HighlightedTextProps) => {
  const parts = text.split(new RegExp(`(${match})`, 'gi'));
  return (
    <p className="todo-item">
      {parts.map((part: string) =>
        part.toLowerCase() === match.toLowerCase() ? (
          <mark>
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default HighlightedText;
