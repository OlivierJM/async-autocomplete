import { render, screen } from '@testing-library/react';
import ResultsList from '../../components/ResultsList';

describe('Result List Component', () => {
  const props = {
    results: [
      {
        userId: 10,
        id: 181,
        title: 'cupiditate sequi aliquam fuga maiores',
        completed: false,
      },
    ],
    filter: '',
    handleAutoComplete: jest.fn(),
    autoCompleted: false,
  };
  it('should not render anything when no filter or when autocompleted', () => {
    render(<ResultsList {...props} />);
    const itemTitle = screen.queryByText(/cupiditate/i);
    expect(itemTitle).not.toBeInTheDocument();
  });
  it('should return no results when there is a filter but no results', () => {
    const noResultsMockData = {
      ...props,
      filter: 'some data',
      results: []
    }
    render(<ResultsList {...noResultsMockData} />);
    const noResultstext = screen.getByTestId('no-results');
    expect(noResultstext.textContent).toContain(`No results found for ${noResultsMockData.filter}`)
  });
  it('should show list of found results', () => {
    const responseMockData = {
      ...props,
      filter: 'some data'
    }
    render(<ResultsList {...responseMockData} />);
    expect(screen.getByTestId('item')).toBeInTheDocument()
    expect(screen.getByTestId('item').textContent).toContain('cupiditate sequi aliquam fuga maiores')
  });
});
