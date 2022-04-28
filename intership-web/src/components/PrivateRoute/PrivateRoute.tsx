import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'Src/hooks';

export interface PrivateRouteProps {
  component: React.ComponentType;
}

// проверяет авторизован ли пользователь, если true отображается компонент который передан как пропс component, в данном случае HomePage
// если нет, то перенапрявляет на страницу авторизации
export function PrivateRoute({ component }: PrivateRouteProps) {
  const identityLogin = useAppSelector((state) => state.identity);
  const Component = component;

  if (identityLogin.isLogin) {
    return <Component />;
  }

  return <Navigate to="/login" />;
}
