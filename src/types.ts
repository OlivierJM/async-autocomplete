
export interface HighlightedTextProps {
  username: string;
  match: string;
}

export interface InputProps {
  setFilter: (value: string) => void;
  filter: string;
}

export interface UsersListProps {
  users: Array<string>;
}
