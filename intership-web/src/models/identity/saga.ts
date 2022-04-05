import { call, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';

import { setLoading, setLogin, doLogin, CredentialPayload, doLogout } from './slice';

type IdentityResponse = {
  data: {
    isLogin: boolean;
  };
};

function* loginSaga({ payload }: { payload: CredentialPayload }) {
  try {
    const { login, password } = payload;
    // c помощью деструктуризации берем только data (это будет true или false)
    const { data }: IdentityResponse = yield call(API.post, '/api/authorize', {
      loginData: {
        login,
        password,
      },
    });
    // console.log(data);
    if (data.isLogin) {
      yield put(setLogin(data.isLogin)); //  isLogin = data.isLogin = true
      yield put(setLoading(false));
    }
  } catch (error) {
    console.error(error);
    yield put(setLogin(false));
    yield put(setLoading(false));
  }
}

function* logoutSaga() {
  yield put(setLogin(false));
  yield put(setLoading(false));
}

function* getIdentitySaga() {
  yield takeEvery(doLogin, loginSaga);
  yield takeEvery(doLogout, logoutSaga);
}

export default getIdentitySaga;
