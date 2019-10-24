import { all, takeEvery, select, put } from "redux-saga/effects";
import * as ticketActions from './actions';
import { ITicket } from "../../interfaces/ticket.interface";
import dayjs from "dayjs";
import Axios from "axios";
import { AnyAction } from "redux";

export default function* requestData() {
    yield all([
        takeEvery(ticketActions.ACTION_REQUEST_TICKET, requestTicket),
        takeEvery(ticketActions.ACTION_REQUEST_SCHEDULE, requestSchedule),
    ])
}

function* requestTicket() {
    const pm = select((state: ITicket) => {
        return {
            'date': dayjs(state.departDate).format('YYYY-MM-DD'),
            'trainNumber': state.trainNumber,
        }
    });
    const resp = yield Axios.get('/rest/ticket', {
        params: pm
    });
    const {
        detail: {
            departTimeStr,
            arriveTimeStr,
            arriveDate,
            durationStr,
        },
        candidates
    } = resp.data;
    yield put(ticketActions.setDepartTimeStr(departTimeStr));
    yield put(ticketActions.setArriveTimeStr(arriveTimeStr));
    yield put(ticketActions.setArriveDate(arriveDate));
    yield put(ticketActions.setDurationStr(durationStr));
    yield put(ticketActions.setTickets(candidates));
}

function* requestSchedule(action: AnyAction) {
    const {
        departStation,
        arriveStation,
    } = action.payload;
    const resp = yield Axios.get('/rest/schedule', {
        params: action.payload
    })
    const data = resp.data as any[];
    let departRow: any = null;
    let arriveRow: any = null;
    for (let i = 0; i < data.length; i++) {
        if (!departRow) {
            if (data[i].station === departStation) {
                departRow = {
                    ...data[i],
                    beforeDepartStation: false,
                    isDepartStation: true,
                    afterArriveStation: false,
                    isArriveStation: false,
                }
                data[i] = departRow;
            } else {
                data[i] = {
                    ...data[i],
                    beforeDepartStation: true,
                    isDepartStation: false,
                    afterArriveStation: false,
                    isArriveStation: false,
                }
            }
        } else if (!arriveRow) {
            if (data[i].station === arriveStation) {
                arriveRow = {
                    ...data[i],
                    beforeDepartStation: false,
                    isDepartStation: false,
                    afterArriveStation: false,
                    isArriveStation: true,
                }
                data[i] = arriveRow;
            } else {
                data[i] = {
                    ...data[i],
                    beforeDepartStation: false,
                    isDepartStation: false,
                    afterArriveStation: false,
                    isArriveStation: false,
                }
            }
        } else {
            data[i] = {
                ...data[i],
                beforeDepartStation: false,
                isDepartStation: false,
                afterArriveStation: true,
                isArriveStation: false,
            }
        }
        data[i] = {
            ...data[i],
            isStartStation: i === 0,
            isEndStation: i === data.length - 1,
        }
    }
    yield put(ticketActions.setScheduleInfo(data));
}