import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../../App';

const mock:any  = []
jest.mock('../../hooks/use-fetch', () => ({
  useFetch: () => mock
}))
describe('Main App Component', () => {
  it('should render the app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Auto Complete for Todos/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('should have a footer note', () => {
    render(<App />);
    const footerElement = screen.getByTestId('api-note');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement.textContent).toContain('Note: We are querying an API')
  });

  it('should return text matching with criteria', async () => {
    mock.data = [
        {
          userId: 10,
          id: 181,
          title: 'cupiditate sequi aliquam fuga maiores',
          completed: false,
        }
    ]
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText(/Type here and click on the results to autocomplete/i), { target: { value: "sequi" } })

    // text should not be available before we query our API
    expect(screen.queryByText('aliquam fuga maiores')).not.toBeInTheDocument()
    //
    await waitFor(() => {
      expect(screen.getByText('aliquam fuga maiores')).toBeInTheDocument()
    })
  });
});