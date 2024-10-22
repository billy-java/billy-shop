// app/Provider.tsx
'use client';

import Navbar from './components/Navbar';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/redux/redux';
import Footer from './components/Footer';

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </Provider>
  );
}
