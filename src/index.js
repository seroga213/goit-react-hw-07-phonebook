import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import store , {persistor} from './store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);