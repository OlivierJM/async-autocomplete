interface AutoCompleteProps {
  handleAutoComplete: (text: string) => void;
}
export interface HighlightedTextProps extends AutoCompleteProps {
  text: string;
  match: string;
}

export interface InputProps {
  setFilter: (value: string) => void;
  filter: string;
}

export interface TodoListProps extends AutoCompleteProps {
  results?: TodoProps[];
  filter: string;
  autoCompleted: boolean;
}

export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
