import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { addOrg, fetchOrg, setOrg } from './slice';
import { Organization, OrganizationCreate } from './type';

type OrgResponse = {
  data: Array<{
    id: number;
    name: string;
    address: string;
    INN: number | string;
  }>;
};
type ArrayResponse = {
  data: Array<{
    id: number;
    name: string;
    address: string;
    INN: number | string;
  }>;
};
const apiORg = '/api/organization';
function* fetchOrgWorker() {
  try {
    const { data }: OrgResponse = yield call(API.get, apiORg);
    // console.log(data);
    yield put(setOrg(data));
  } catch (error) {
    console.error(error);
  }
}
// post `/organization/?id=${organizationId}` | `{name:string, address:string, INN:number}` |

function* fetchOrgWatcherAdd({ payload }: { payload: OrganizationCreate }) {
  try {
    yield call(API.post, apiORg, payload);
    yield delay(5000);
    const { data }: OrgResponse = yield call(API.get, apiORg);
    yield put(setOrg(data));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// функция watcher
function* getOrgSaga() {
  yield takeEvery(addOrg, fetchOrgWatcherAdd);
  yield takeEvery(fetchOrg, fetchOrgWorker);
}

export default getOrgSaga;
