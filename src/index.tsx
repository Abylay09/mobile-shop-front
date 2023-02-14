import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createRoutesFromElements, createBrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PhonePage from 'pages/phone/PhonePage';
import FindPhonePage from 'pages/find-phone/FindPhonePage';
import { CartProvider } from 'context/CartContext';
import CartPage from 'pages/cart/CartPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/' element={<App />} />
      <Route path='/phone'>
        <Route path=':id' element={<PhonePage />} />
        <Route path='/phone/findPhone/:name' element={<FindPhonePage />} />
      </Route>
      <Route path='/cartPage' element={<CartPage />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </CartProvider>
  </QueryClientProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
