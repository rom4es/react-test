import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import './reset.css';
import './index.css';

import App from './App';
import Layout from './components/layout/layout';
import ProductPage from './pages/productPage';
import CatalogPage from './pages/catalogPage';
import ContactsPage from './pages/contactsPage';
import NotFoundPage from './pages/notFoundPage';
import BasketPage from './pages/basketPage';

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<ProductPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
