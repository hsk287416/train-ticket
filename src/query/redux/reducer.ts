import { IQuery } from "../../interfaces/query.interface";
import { OrderTypeEnum } from "../../enum/order-type.enum";
import * as dateUtils from '../../functions/date-utils.func';
import { Reducer, AnyAction } from "redux";
import * as queryActions from './actions';
import { IChangeValue } from "../../interfaces/change-value.interface";

const initialState: IQuery = {
    from: '',
    to: '',
    departDate: dateUtils.clearTime(Date.now()),
    highSpeed: false,
    trainList: [],
    orderType: OrderTypeEnum.ORDER_DEPART,
    onlyTickets: false,
    ticketTypes: [],
    checkedTicketTypes: null,
    trainTypes: [],
    checkedTrainTypes: null,
    departStations: [],
    checkedDepartStations: null,
    arriveStations: [],
    checkedArriveStations: null,
    departTimeStart: 0,
    departTimeEnd: 24,
    arriveTimeStart: 0,
    arriveTimeEnd: 24,
    isFiltersVisible: false,
    searchParsed: false,
};

const queryReducer: Reducer<IQuery, AnyAction> = (state: IQuery = initialState, action: AnyAction) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case queryActions.ACTION_SET_FROM:
            newState.from = action.payload;
            break;
        case queryActions.ACTION_SET_TO:
            newState.to = action.payload;
            break;
        case queryActions.ACTION_SET_DEPART_DATE:
            newState.departDate = action.payload;
            break;
        case queryActions.ACTION_SET_HIGH_SPEED:
            newState.highSpeed = action.payload;
            break;
        case queryActions.ACTION_SET_TRAIN_LIST:
            newState.trainList = action.payload;
            break;
        case queryActions.ACTION_SET_ORDER_TYPE:
            newState.orderType = action.payload;
            break;
        case queryActions.ACTION_SET_ONLY_TICKETS:
            newState.onlyTickets = action.payload;
            break;
        case queryActions.ACTION_SET_TICKET_TYPES:
            newState.ticketTypes = action.payload;
            break;
        case queryActions.ACTION_SET_CHECKED_TICKET_TYPES:
            newState.checkedTicketTypes = action.payload;
            break;
        case queryActions.ACTION_SET_TRAIN_TYPES:
            newState.trainTypes = action.payload;
            break;
        case queryActions.ACTION_SET_CHECKED_TRAIN_TYPES:
            newState.checkedTrainTypes = action.payload;
            break;
        case queryActions.ACTION_SET_DEPART_STATIONS:
            newState.departStations = action.payload;
            break;
        case queryActions.ACTION_SET_CHECKED_DEPART_STATIONS:
            newState.checkedDepartStations = action.payload;
            break;
        case queryActions.ACTION_SET_ARRIVE_STATIONS:
            newState.arriveStations = action.payload;
            break;
        case queryActions.ACTION_SET_CHECKED_ARRIVE_STATIONS:
            newState.checkedArriveStations = action.payload;
            break;
        case queryActions.ACTION_SET_DEPART_TIME_END:
            newState.departTimeEnd = action.payload;
            break;
        case queryActions.ACTION_SET_ARRIVE_TIME_START:
            newState.arriveTimeStart = action.payload;
            break;
        case queryActions.ACTION_SET_ARRIVE_TIME_END:
            newState.arriveTimeEnd = action.payload;
            break;
        case queryActions.ACTION_SET_IS_FILTERS_VISIBLE:
            newState.isFiltersVisible = action.payload;
            break;
        case queryActions.ACTION_SET_SEARCH_PARSED:
            newState.searchParsed = action.payload;
            break;
        case queryActions.CHANGE_VALUE:
            const { target, value } = action.payload;
            newState[target] = value;
            break;
        case queryActions.CHANGE_VALUE_LIST:
            const itemList = action.payload.list as IChangeValue[];
            for (const item of itemList) {
                const { target, value } = item;
                newState[target] = value;
            }
            break;
        default:
            break;
    }
    return newState;
}

export default queryReducer;