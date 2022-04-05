import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { HomePage, CounterPage, TodosPage, LoginPage } from 'Common/Pages';
import cs from 'classnames';
import s from './App.module.scss';
import { PrivateRoute } from './components/PrivateRoute';

// строка 16 - проверяет авторизован ли пользователь
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={cs(s.app, 'w-full')}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute component={HomePage} />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
