import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage, CounterPage, TodosPage, AuthPage } from 'Common/Pages';
import { Navigation } from 'Common/Components/Navigation';

import s from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={s.app}>
      <AuthPage />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/todos" element={<TodosPage />} />
      </Routes>
    </div>
  );
};
