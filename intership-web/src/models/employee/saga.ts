import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { clearEmployee, fetchEmployee, setEmployee } from './slice';
import { IdDiv } from './type';

type EmployeeResponse = {
  data: Array<{
    id: number;
    id_division: number;
    FIO: string;
    address: string;
    position: string;
  }>;
};

// get `/employee/?id=${divisionId}` | | `[{id:number, id_division:number, FIO:string, address:number, position:number}]`
// post `/employee/?id=${employeeId}`| `{id_division:number, FIO:string, address:number, position:number}` |
// delete `/employee/?id=${employeeId}`| |
// put `/employee/?id=${employeeId}`| `{FIO:string, address:number, position:number}` |

const apiDiv = `/api/employee/?id=`;

function* fetchEmployeeWorker({ payload }: { payload: IdDiv }) {
  try {
    const apiDivGet = `/api/employee/?id=${payload.id_division}`;
    const { data }: EmployeeResponse = yield call(API.get, apiDivGet);
    console.log('saga=', data);
    yield put(clearEmployee());
    yield put(setEmployee(data));
  } catch (error) {
    console.log(error);
  }
}

// function* fetchDivWorkerAdd({ payload }: { payload: IDivisionCreate }) {
//   try {
//     yield call(API.post, apiDiv, payload);
//     yield delay(5000);
//     const apiDivGet = `/api/division/?id=${payload.id_organization}`;
//     const { data }: DivResponse = yield call(API.get, apiDivGet);
//     yield put(clearDiv());
//     yield put(setDiv(data));
//   } catch (error) {
//     console.error(error);
//   }
// }

// function* fetchDivWorkerDel({ payload }: { payload: IdDivDel }) {
//   try {
//     const apiDivDel = `/api/division/?id=${payload.id}`;
//     yield call(API.delete, apiDivDel);
//     yield delay(5000);
//     const { data }: DivResponse = yield call(API.get, apiDiv);
//     yield put(clearDiv());
//     yield put(setDiv(data));
//   } catch (error) {
//     console.error(error);
//   }
// }

function* getEmployeeSaga() {
  yield takeEvery(fetchEmployee, fetchEmployeeWorker);
  //   yield takeEvery(addDiv, fetchDivWorkerAdd);
  //   yield takeEvery(delDiv, fetchDivWorkerDel);
}

export default getEmployeeSaga;
