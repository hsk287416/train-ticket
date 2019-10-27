import { all, put, takeEvery } from "redux-saga/effects";
import { AnyAction } from "redux";
import Axios from "axios";
import * as orderActions from './actions';

export default function* requestData() {
    yield all([
        takeEvery(orderActions.ACTION_FEATCH_INITDATA, fetchInitial)
    ])
}

function* fetchInitial(action: AnyAction) {
    const url = action.payload;
    const resp = yield Axios.get(url);
    const {
        departTimeStr,
        arriveTimeStr,
        arriveDate,
        durationStr,
        price,
    } = resp.data;
    yield put(orderActions.setDepartTimeStr(departTimeStr));
    yield put(orderActions.setArriveTimeStr(arriveTimeStr));
    yield put(orderActions.setArriveDate(arriveDate));
    yield put(orderActions.setDurationStr(durationStr));
    yield put(orderActions.setPrice(price));
}