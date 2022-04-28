import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { setLoading } from '../identity/slice';
import { addOrg, clearOrgs, delOrg, editOrg, fetchOrg, setOrg } from './slice';
import { IdOrg, Organization, OrganizationCreate } from './type';

type OrgResponse = {
  data: Array<{
    id: number;
    name: string;
    address: string;
    INN: number | string;
  }>;
};

const apiOrg = '/api/organization';

function* fetchOrgWorker() {
  try {
    const { data }: OrgResponse = yield call(API.get, apiOrg);
    yield put(setOrg(data));
  } catch (error) {
    console.error(error);
  }
}
// post `/organization/?id=${organizationId}` | `{name:string, address:string, INN:number}` |

function* fetchOrgWorkerAdd({ payload }: { payload: OrganizationCreate }) {
  try {
    yield call(API.post, apiOrg, payload);
    yield put(setLoading(true));
    yield delay(5000);
    yield put(setLoading(false));
    const { data }: OrgResponse = yield call(API.get, apiOrg);
    yield put(clearOrgs());
    yield put(setOrg(data));
  } catch (error) {
    console.error(error);
  }
}

// delete `/organization/${organizationId}`| |

function* fetchOrgWorkerDel({ payload }: { payload: IdOrg }) {
  try {
    const apiORgDel = `/api/organization/?id=${payload.id}`;
    yield call(API.delete, apiORgDel);
    yield put(setLoading(true));
    yield delay(5000);
    yield put(setLoading(false));
    const { data }: OrgResponse = yield call(API.get, apiOrg);
    yield put(clearOrgs());
    yield put(setOrg(data));
  } catch (error) {
    console.error(error);
  }
}
// put `/organization/?id=${organizationId}`| `{name:string, address:string, INN:number}` |

function* fetchOrgWorkerEdit({ payload }: { payload: Organization }) {
  try {
    const apiOrgEdit = `/api/organization/?id=${payload.id}`;
    yield call(API.put, apiOrgEdit, { ...payload });
    yield put(setLoading(true));
    yield delay(5000);
    yield put(setLoading(false));
    const { data }: OrgResponse = yield call(API.get, apiOrg);
    yield put(clearOrgs());
    yield put(setOrg(data));
  } catch (error) {
    console.error(error);
  }
}

// функция watcher
function* getOrgSaga() {
  yield takeEvery(addOrg, fetchOrgWorkerAdd);
  yield takeEvery(fetchOrg, fetchOrgWorker);
  yield takeEvery(delOrg, fetchOrgWorkerDel);
  yield takeEvery(editOrg, fetchOrgWorkerEdit);
}

export default getOrgSaga;
