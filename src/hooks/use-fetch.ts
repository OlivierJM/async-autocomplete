// https://jsonplaceholder.typicode.com/todos?q="some query"

import { useEffect, useRef, useState } from 'react';
import { TodoProps } from '../types';

type ErrorType = string | null;

interface State {
  data?: TodoProps[];
  error?: Error | ErrorType;
  loading: boolean;
}

export function useFetch(url: string, filter: string, autoCompleted: boolean): State {
  const [data, setData] = useState<TodoProps[]>([]);
  const [error, setError] = useState<string | null>('null');
  const [loading, setLoading] = useState<boolean>(false);
  const requestStatus = useRef<boolean>(false);

  // We could implement some cache to avoid fetch same data twice
  useEffect(() => {
    if (!url || !filter || autoCompleted) return;
    requestStatus.current = false;
    const fetchData = async () => {
      setLoading(true);
      try {
        if (requestStatus.current) return;
        const result = await fetch(url);
        const json = await result.json();
        setData(json);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      requestStatus.current = true;
    };
  }, [url, filter, autoCompleted]);
  return { data, error, loading };
}
