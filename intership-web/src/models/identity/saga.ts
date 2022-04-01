import { call, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';

import { setIdentity, doLogin, CredentialPayload, doLogout } from './slice';

type IdentityResponse = {
  data: {
    isLogin: boolean;
  };
};

function* loginSaga({ payload }: { payload: CredentialPayload }) {
  try {
    const { login, password } = payload;
    const { data }: IdentityResponse = yield call(API.post, '/api/authorize', {
      loginData: {
        login,
        password,
      },
    });

    if (data.isLogin) {
      yield put(setIdentity({ isLogin: data.isLogin, loading: false }));
    }
  } catch (error) {
    console.error(error);
    yield put(setIdentity({ isLogin: false, loading: false }));
  }
}

function* logoutSaga() {
  yield put(setIdentity({ isLogin: false, loading: false }));
}

function* getIdentitySaga() {
  yield takeEvery(doLogin, loginSaga);
  yield takeEvery(doLogout, logoutSaga);
}

export default getIdentitySaga;
