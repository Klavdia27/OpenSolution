import { call, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { fetchOrg, setOrg } from './slice';

type OrgResponse = {
  data: Array<{
    id: number;
    name: string;
    address: string;
    INN: number | string;
  }>;
};

function* fetchOrgWorker() {
  try {
    const { data }: OrgResponse = yield call(API.get, '/api/organization');
    // console.log(data);
    yield put(setOrg(data));
  } catch (error) {
    console.error(error);
  }
}

// post `/organization/?id=${organizationId}` | `{name:string, address:string, INN:number}` |

function* orgWatcher() {}

// функция watcher
function* getOrgSaga() {
  yield takeEvery(fetchOrg, fetchOrgWorker);
}

export default getOrgSaga;
