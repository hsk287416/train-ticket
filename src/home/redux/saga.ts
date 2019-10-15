import {takeEvery, put} from 'redux-saga/effects';
import { REQUEST_CITY_DATA, setCityData } from './action';
import Axios from 'axios';

export default function* requestData() {
    yield takeEvery(REQUEST_CITY_DATA, loadCityData);
}

function* loadCityData() {
    const resp = yield Axios.get('/rest/cities');
    const action = setCityData(resp.data);
    yield put(action);
}