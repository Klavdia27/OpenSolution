import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { setLoading } from '../identity/slice';
import { addDiv, clearDiv, delDiv, fetchDiv, setDiv } from './slice';
import { IdOrg, IDivisionCreate, DivisionDel } from './type';

type DivResponse = {
  data: Array<{
    id: number;
    id_organization: number;
    name: string;
    phone: number;
  }>;
};

// get `/division/${organizationId}` |  | `[{id:number, id_organization:number, name:string, phone:number}]`
// post `/division/?id=${divisionId}`| `{id_organization:number, name:string, phone:number}`|
// delete `/division/?id=${divisionId}`| |
// put `/division/?id=${divisionId}`| `{name:string, phone:number}` |

const apiDiv = `/api/division/?id=`;

function* fetchDivWorker({ payload }: { payload: IdOrg }) {
  try {
    const apiDivGet = `/api/division/?id=${payload.id_organization}`;
    const { data }: DivResponse = yield call(API.get, apiDivGet);
    yield put(clearDiv());
    yield put(setDiv(data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchDivWorkerAdd({ payload }: { payload: IDivisionCreate }) {
  try {
    yield call(API.post, apiDiv, payload);
    yield put(setLoading(true));
    yield delay(5000);
    yield put(setLoading(false));
    const apiDivGet = `/api/division/?id=${payload.id_organization}`;
    const { data }: DivResponse = yield call(API.get, apiDivGet);
    yield put(clearDiv());
    yield put(setDiv(data));
  } catch (error) {
    console.error(error);
  }
}

function* fetchDivWorkerDel({ payload }: { payload: DivisionDel }) {
  try {
    const apiDivDel = `/api/division/?id=${payload.id}`;
    yield call(API.delete, apiDivDel);
    const apiDivGet = `/api/division/?id=${payload.idOrganization}`;
    yield put(setLoading(true));
    yield delay(5000);
    yield put(setLoading(false));
    const { data }: DivResponse = yield call(API.get, apiDivGet);
    yield put(clearDiv());
    yield put(setDiv(data));
  } catch (error) {
    console.error(error);
  }
}

function* getDivSaga() {
  yield takeEvery(fetchDiv, fetchDivWorker);
  yield takeEvery(addDiv, fetchDivWorkerAdd);
  yield takeEvery(delDiv, fetchDivWorkerDel);
}

export default getDivSaga;
