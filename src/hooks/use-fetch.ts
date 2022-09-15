import { useEffect, useRef, useState } from 'react';
import { DataProps, ResultProps, CacheType } from '../types';



export function useFetch(
  url: string,
  filter: string,
  autoCompleted: boolean
): DataProps {
  const [data, setData] = useState<ResultProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const cache = useRef<CacheType>({})

  useEffect(() => {
    if (!url || !filter || autoCompleted) return;
    const fetchData = async () => {
      if (cache.current[url]) {
        setData(cache.current[url]);
        return
      }
      setLoading(true);
      try {
        const result = await fetch(url);
        const json = await result.json();
        cache.current[url] = json
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, filter, autoCompleted]);
  return { data, error, loading };
}
