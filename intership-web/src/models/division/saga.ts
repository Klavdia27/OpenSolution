import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { IdOrg } from '../organization/type';
import { addDiv, clearDiv, delDiv, fetchDiv, setDiv } from './slice';
import { IdDiv, IDivision, IDivisionCreate } from './type';

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

const apiDiv = `/api/division/?id=1`;

function* fetchDivWorker() {
  try {
    const { data }: DivResponse = yield call(API.get, apiDiv);
    // console.log('data=', data);
    yield put(clearDiv());
    yield put(setDiv(data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchDivWorkerAdd({ payload }: { payload: IDivisionCreate }) {
  try {
    yield call(API.post, apiDiv, payload);
    yield delay(5000);
    const { data }: DivResponse = yield call(API.get, apiDiv);
    yield put(clearDiv());
    yield put(setDiv(data));
  } catch (error) {
    console.error(error);
  }
}

function* fetchDivWorkerDel({ payload }: { payload: IdDiv }) {
  try {
    const apiDivDel = `/api/division/?id=${payload.id}`;
    yield call(API.delete, apiDivDel);
    yield delay(5000);
    const { data }: DivResponse = yield call(API.get, apiDiv);
    yield put(clearDiv());
    yield put(setDiv(data));
    console.log(data);
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
