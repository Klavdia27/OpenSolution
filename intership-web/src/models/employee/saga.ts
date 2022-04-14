import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { API } from 'Src/Api';
import { addEmployee, clearEmployee, delEmployee, fetchEmployee, setEmployee } from './slice';
import { EmployeeDel, IdDiv, IEmployeeCreate } from './type';

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

const apiEmp = `/api/employee/?id=`;

function* fetchEmployeeWorker({ payload }: { payload: IdDiv }) {
  try {
    const apiDivGet = `/api/employee/?id=${payload.id_division}`;
    const { data }: EmployeeResponse = yield call(API.get, apiDivGet);
    // console.log('saga=', data);
    yield put(clearEmployee());
    yield put(setEmployee(data));
  } catch (error) {
    console.log(error);
  }
}

function* fetchEmployeeWorkerAdd({ payload }: { payload: IEmployeeCreate }) {
  try {
    yield call(API.post, apiEmp, payload);
    yield delay(5000);
    const apiEmpGet = `/api/employee/?id=${payload.id_division}`;
    const { data }: EmployeeResponse = yield call(API.get, apiEmpGet);
    yield put(clearEmployee());
    yield put(setEmployee(data));
  } catch (error) {
    console.error(error);
  }
}

function* fetchEmployeeWorkerDel({ payload }: { payload: EmployeeDel }) {
  try {
    const apiEmpDel = `/api/employee/?id=${payload.id}`;
    yield call(API.delete, apiEmpDel);
    yield delay(5000);
    const apiEmpGet = `/api/employee/?id=${payload.idDivision}`;
    yield delay(5000);
    const { data }: EmployeeResponse = yield call(API.get, apiEmpGet);
    yield put(clearEmployee());
    yield put(setEmployee(data));
  } catch (error) {
    console.error(error);
  }
}

function* getEmployeeSaga() {
  yield takeEvery(fetchEmployee, fetchEmployeeWorker);
  yield takeEvery(addEmployee, fetchEmployeeWorkerAdd);
  yield takeEvery(delEmployee, fetchEmployeeWorkerDel);
}

export default getEmployeeSaga;
