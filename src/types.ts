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
export interface ResultProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ResultListProps extends AutoCompleteProps {
  results?: ResultProps[];
  filter?: string;
  autoCompleted: boolean;
}

type ErrorType = string | null;

export interface DataProps {
  data?: ResultProps[];
  error?: Error | ErrorType;
  loading: boolean;
}


export type CacheType = {[url: string]: ResultProps[]}