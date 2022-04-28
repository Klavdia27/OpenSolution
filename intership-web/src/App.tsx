import React from 'react';
import { Route, Routes, BrowserRouter, useParams } from 'react-router-dom';

import { HomePage, DivisionsPage, EmployeePage, LoginPage } from 'Common/Pages';
import cs from 'classnames';
import s from './App.module.scss';

import { PrivateRoute } from './components/PrivateRoute';

// строка 16 - проверяет авторизован ли пользователь
export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={cs(s.app, 'w-full')}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/organization" element={<PrivateRoute component={HomePage} />} />
          <Route
            path="/organization/division/:iddiv/employee"
            element={<PrivateRoute component={EmployeePage} />}
          />
          <Route
            path="/organization/:idorg/division"
            element={<PrivateRoute component={DivisionsPage} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
