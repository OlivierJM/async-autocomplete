import { TodoListProps } from '../types';
import HighlightedText from './HightLightedText';
import '../styles/result.css'

const ResultsList = ({ results, filter, handleAutoComplete, autoCompleted }: TodoListProps) => {
  if (!filter || autoCompleted) return null; // we don't want to show anything until a user starts typing
  if ((!results || !results.length) && filter) {
    return (
      <p className="todo-item">
        No results found for <mark>{filter}</mark>
      </p>
    );
  }
  return (
    <div className="todo-item-container">
      {results?.map((todo) => (
        <HighlightedText key={todo.id} text={todo.title} match={filter} handleAutoComplete={handleAutoComplete} />
      ))}
    </div>
  );
};

export default ResultsList;
