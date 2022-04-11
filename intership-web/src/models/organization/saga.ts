import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { addOrg, clearOrgs, delOrg, fetchOrg, setOrg } from './slice';
import { IdOrg, Organization, OrganizationCreate } from './type';

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
// const apiOrgDel = `/organization/organization${IdOrg}`;

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

// delete `/organization/${organizationId}`| |
// localhost/organization/1
// yield call(API.delete, apiORg + `/${payload.id}`);

function* fetchOrgWatcherDel({ payload }: { payload: IdOrg }) {
  try {
    // localhost/organization/1
    console.log('pay=', payload);
    const apiORgDel = `/api/organization/${payload.id}`;
    yield call(API.delete, apiORgDel);
    // yield call(API.post, apiORg, payload);
    yield delay(5000);
    const { data }: OrgResponse = yield call(API.get, apiORg);
    yield put(clearOrgs());
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
  yield takeEvery(delOrg, fetchOrgWatcherDel);
}

export default getOrgSaga;
