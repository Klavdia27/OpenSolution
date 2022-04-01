import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { HomePage, CounterPage, TodosPage, LoginPage } from 'Common/Pages';
import cs from 'classnames';
import s from './App.module.scss';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={cs(s.app, 'w-full')}>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* TODO: path will be replaced by "/login" */}
          {/* TODO: uncomment when auth service is done */}
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
