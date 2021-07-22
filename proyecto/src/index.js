import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { getAllServices } from './redux/actionsCreators';
import store from './redux/store';
//import "./styles/styles.scss"

store.dispatch(getAllServices())
render(
  <StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);

