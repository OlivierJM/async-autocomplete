export interface HighlightedTextProps {
  username: string;
  match: string;
}

export interface InputProps {
  searchFilter: () => void;
  filter: string;
}

export interface UsersListProps {
  users: string[];
}
