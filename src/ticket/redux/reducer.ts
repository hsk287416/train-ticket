import { ITicket } from "../../interfaces/ticket.interface";
import { Reducer, AnyAction } from "redux";
import * as ticketActions from './actions';
import { clearTime } from "../../functions/date-utils.func";

const initialState: ITicket = {
    departDate: Date.now(),
    arriveDate: Date.now(),
    departTimeStr: '',
    arriveTimeStr: '',
    departStation: null,
    arriveStation: null,
    trainNumber: null,
    durationStr: '',
    tickets: [],
    isScheduleVisible: false,
    searchParsed: false,
    scheduleInfo: [],
}

const ticketReducer: Reducer<ITicket, AnyAction> = (state: ITicket = initialState, action: AnyAction) => {
    const newState = JSON.parse(JSON.stringify(state)) as ITicket;
    const { type, payload } = action;
    switch (type) {
        case ticketActions.ACTION_SET_DEPART_DATE:
            newState.departDate = payload;
            break;
        case ticketActions.ACTION_SET_ARRIVE_DATE:
            newState.arriveDate = payload;
            break;
        case ticketActions.ACTION_SET_DEPART_TIME_STR:
            newState.departTimeStr = payload;
            break;
        case ticketActions.ACTION_SET_ARRIVE_TIME_STR:
            newState.arriveTimeStr = payload;
            break;
        case ticketActions.ACTION_SET_DEPART_STATION:
            newState.departStation = payload;
            break;
        case ticketActions.ACTION_SET_ARRIVE_STATION:
            newState.arriveStation = payload;
            break;
        case ticketActions.ACTION_SET_TRAIN_NUMBER:
            newState.trainNumber = payload;
            break;
        case ticketActions.ACTION_SET_DURATION_STR:
            newState.durationStr = payload;
            break;
        case ticketActions.ACTION_SET_TICKETS:
            newState.tickets = payload;
            break;
        case ticketActions.ACTION_SET_IS_SCHEDULE_VISIBLE:
            newState.isScheduleVisible = payload;
            break;
        case ticketActions.ACTION_TOGGLE_IS_SCHEDULE_VISIBLE:
            newState.isScheduleVisible = !newState.isScheduleVisible;
            break;
        case ticketActions.ACTION_SET_SEARCH_PARSED:
            newState.searchParsed = payload;
            break;
        case ticketActions.ACTION_NEXT_DAY:
            newState.departDate = clearTime(newState.departDate).getTime() + 86400 * 1000;
            break;
        case ticketActions.ACTION_PREV_DAY:
            newState.departDate = clearTime(newState.departDate).getTime() + 86400 * 1000;
            break;
        case ticketActions.ACTION_SET_SCHEDULE_INFO:
            newState.scheduleInfo = payload;
            break;
        default:
            break;
    }
    return newState;
}

export default ticketReducer;