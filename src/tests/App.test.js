import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import App from '../components/App';

describe('App', () => {
  it('renders app correctly', () => {
    const { asFragment } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
