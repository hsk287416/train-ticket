import {takeEvery, put, select, all} from 'redux-saga/effects';
import * as homeActions from './action';
import Axios from 'axios';
import { IHome } from '../../interfaces/home.interface';
import { AnyAction } from 'redux';

export default function* requestData() {
    yield all([
        takeEvery(homeActions.REQUEST_CITY_DATA, loadCityData),
        takeEvery(homeActions.EXCHANGE_FROM_TO, exchangeFromTo),
        takeEvery(homeActions.SHOW_CITY_SELECTOR, showCitySelector),
    ]);
}

function* loadCityData() {
    const resp = yield Axios.get('/rest/cities');
    const action = homeActions.setCityData(resp.data);
    yield put(action);
}

function* exchangeFromTo() {
    const {from, to} = yield select((state: IHome) => {
        return {
            from: state.from,
            to: state.to,
        }
    });
    yield put(homeActions.setForm(to));
    yield put(homeActions.setTo(from));
}

function* showCitySelector(action: AnyAction) {
    yield put({
        type: homeActions.SET_IS_CITY_SELECTOR_VISIBLE,
        payload: true,
    });
    yield put({
        type: homeActions.SET_CURRENT_SELECTING_LEFT_CITY,
        payload: action.payload,
    })
}