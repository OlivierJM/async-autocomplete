import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/use-fetch";

describe("useFetch hook", () => {
  it("should not break", async () => {
    const { result } = renderHook(() => useFetch('https://some.todos.com', 'filter', false));
    expect(result.current).toBeTruthy();
  });
});