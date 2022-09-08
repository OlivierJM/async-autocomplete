import { renderHook } from '@testing-library/react-hooks';
import useDebounceValue from '../../hooks/use-debounced-value';

describe('useDebouncedValue hook', () => {
  it('should return a debounced value', async () => {
    const { result } = renderHook(() => useDebounceValue('initial value', 50));
    expect(result.current).toBe('initial value');
  });
});
