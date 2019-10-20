import { all, select, put, takeEvery } from "redux-saga/effects";
import { IQuery } from "../../interfaces/query.interface";
import { OrderTypeEnum } from "../../enum/order-type.enum";
import * as queryActions from './actions';
import * as dateUtils from '../../functions/date-utils.func';
import Axios from 'axios';
import { AnyAction } from "redux";

export default function* requestData() {
    yield all([
        takeEvery(queryActions.ACTION_TOGGLE_ORDER_TYPE, toggleOrderType),
        takeEvery(queryActions.ACTION_NEXT_DAY, nextDate),
        takeEvery(queryActions.ACTION_PREV_DAY, prevDate),
        takeEvery(queryActions.ACTION_REQUEST_LIST, requestList),
    ]);
}

function* toggleOrderType() {
    const orderType: OrderTypeEnum = yield select((state: IQuery) => state.orderType);
    if (orderType === OrderTypeEnum.ORDER_DEPART) {
        yield put({
            type: queryActions.ACTION_SET_ORDER_TYPE,
            payload: OrderTypeEnum.ORDER_DURATION
        })
    } else {
        yield put({
            type: queryActions.ACTION_SET_ORDER_TYPE,
            payload: OrderTypeEnum.ORDER_DEPART
        })
    }
}

function* nextDate() {
    const departDate = yield select((state: IQuery) => state.departDate);
    yield put(queryActions.setDepartDate(dateUtils.clearTime(departDate).getTime() + 86400 * 1000));
}

function* prevDate() {
    const departDate = yield select((state: IQuery) => state.departDate);
    yield put(queryActions.setDepartDate(dateUtils.clearTime(departDate).getTime() - 86400 * 1000));
}

function* requestList(action: AnyAction) {
    const resp = yield Axios.get('/rest/query', {
        params: action.payload,
    })
    const {
        dataMap: {
            directTrainInfo: {
                trains,
                filter: {
                    ticketType,
                    trainType,
                    depStation,
                    arrStation,
                },
            },
        },
    } = resp.data;
    yield put(queryActions.setTrainList(trains));
    yield put(queryActions.setTicketTypes(ticketType));
    yield put(queryActions.setTrainTypes(trainType));
    yield put(queryActions.setDepartStations(depStation));
    yield put(queryActions.setArriveStations(arrStation));
}