import { HighlightedTextProps } from "../types";

const HighlightedText = ({ username, match }: HighlightedTextProps) => {
  const parts = username.split(new RegExp(`(${match})`, 'gi'));
  return (
    <span>
      {parts.map((part: string) =>
        part.toLowerCase() === match.toLowerCase() ? (
          <span
            style={{
              backgroundColor: 'salmon',
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default HighlightedText;
