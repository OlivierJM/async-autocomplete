import { ResultListProps } from '../types';
import HighlightedText from './HightLightedText';
import '../styles/result.css'

const ResultsList = ({ results, filter, handleAutoComplete, autoCompleted }: ResultListProps) => {
  if (!filter || autoCompleted) return null; // we don't want to show anything until a user starts typing
  if ((!results || !results.length) && filter) {
    return (
      <p className="item" data-testid="no-results">
        No results found for <mark>{filter}</mark>
      </p>
    );
  }
  return (
    <div className="item-container">
      {results?.map((item) => (
        <HighlightedText key={item.id} text={item.title} match={filter} handleAutoComplete={handleAutoComplete} />
      ))}
    </div>
  );
};

export default ResultsList;
