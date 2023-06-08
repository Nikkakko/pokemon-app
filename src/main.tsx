import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyles } from './styles/globalStyles.ts';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyles />
        <ToastContainer />
        <App />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
