import '@hi9mi/normalize-css/index.min.css';
import './styles/index.css';

import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './containers/App';
import { store } from './store/store';

const node = document.getElementById('root');

render(
  <StrictMode>
    <Provider store={store}>
      <Router basename="/react-countries/">
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  node
);
