import { takeEvery, put, select, all } from 'redux-saga/effects';
import * as homeActions from './action';
import Axios from 'axios';
import { IHome } from '../../interfaces/home.interface';
import { AnyAction } from 'redux';
import { StorageKeyEnum } from '../../enum/storage-key.enum';

export default function* requestData() {
    yield all([
        takeEvery(homeActions.REQUEST_CITY_DATA, loadCityData),
        takeEvery(homeActions.EXCHANGE_FROM_TO, exchangeFromTo),
        takeEvery(homeActions.SHOW_CITY_SELECTOR, showCitySelector),
        takeEvery(homeActions.SET_SELECTED_CITY, setSelectedCity),
    ]);
}

function* loadCityData() {
    let cityData: any = sessionStorage.getItem(StorageKeyEnum.CITY_DATA);
    if (cityData === null) {
        const resp = yield Axios.get('/rest/cities?_' + Date.now());
        sessionStorage.setItem(StorageKeyEnum.CITY_DATA, JSON.stringify(resp.data));
        cityData = resp.data;
    } else {
        cityData = JSON.parse(cityData);
    }

    yield put(homeActions.setCityData(cityData));
    yield put(homeActions.setIsLoadingCityData(false));
}

function* exchangeFromTo() {
    const { from, to } = yield select((state: IHome) => {
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

function* setSelectedCity(action: AnyAction) {
    const currentSelectingLeftCity: boolean = yield select((state: IHome) => state.currentSelectingLeftCity);
        if (currentSelectingLeftCity) {
            yield put(homeActions.setForm(action.payload));
        } else {
            yield put(homeActions.setTo(action.payload));
        }
        yield put(homeActions.hideCitySelector());
}