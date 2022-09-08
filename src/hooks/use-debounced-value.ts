import { useEffect, useState } from 'react';

// we can pass different types of values here
export default function useDebounceValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const delayHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(delayHandler);
    };
  }, [value, delay]);
  return debouncedValue;
}
