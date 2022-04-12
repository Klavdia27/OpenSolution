import { AnyAction, combineReducers, configureStore, Dispatch, Middleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import identityReducer, { initialIdentityState } from './identity/slice';
import userReducer, { initialUserState } from './example/slice';
import orgReducer, { initialOrgState } from './organization/slice';
import divReducer, { initialDivState } from './division/slice';
import getUserSaga from './example/sagas';
import getIdentitySaga from './identity/saga';
import getOrgSaga from './organization/saga';
import getDivSaga from './division/saga';

// persist - функция мидлвар, которая сохраняет значение store (login) в localstorage
const persist: Middleware<any, RootState> =
  (store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
    const result = next(action);
    const savedStore = store.getState().identity;
    localStorage.setItem('isLogin', JSON.stringify(savedStore.isLogin));
    return result;
  };

const saga = createSagaMiddleware();

// объединяем редьюсеры
const rootReducer = combineReducers({
  certs: userReducer,
  identity: identityReducer,
  org: orgReducer,
  div: divReducer,
});

// начальные данные state
let preloadedState = {
  certs: initialUserState,
  identity: initialIdentityState,
  org: initialOrgState,
  div: initialDivState,
};

// отлов ошибок
try {
  const isLogin = localStorage.getItem('isLogin');
  if (isLogin) {
    preloadedState = {
      ...preloadedState,
      identity: {
        ...initialIdentityState,
        isLogin: JSON.parse(isLogin),
      },
    };
  }
} catch (error) {
  console.error(error);
  localStorage.clear();
}

// конфигурируем store
export const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: [persist, saga],
});

saga.run(getUserSaga);
saga.run(getIdentitySaga);
saga.run(getOrgSaga);
saga.run(getDivSaga);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
