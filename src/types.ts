export interface HighlightedTextProps {
  text: string;
  match: string;
}

export interface InputProps {
  setFilter: (value: string) => void;
  filter: string;
}

export interface UsersListProps {
  results?: TodoProps[];
  filter: string;
}

export interface TodoProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
