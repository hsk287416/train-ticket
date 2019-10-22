import { IChangeValue } from "../../interfaces/change-value.interface";

export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_ARRIVE_DATE = 'SET_ARRIVE_DATE';
export const ACTION_SET_DEPART_TIME_STR = 'SET_DEPART_TIME_STR';
export const ACTION_SET_ARRIVE_TIME_STR = 'SET_ARRIVE_TIME_STR';
export const ACTION_SET_DEPART_STATION = 'SET_DEPART_STATION';
export const ACTION_SET_ARRIVE_STATION = 'SET_ARRIVE_STATION';
export const ACTION_SET_TRAIN_NUMBER = 'SET_TRAIN_NUMBER';
export const ACTION_SET_DURATION_STR = 'SET_DURATION_STR';
export const ACTION_SET_TICKETS = 'SET_TICKETS';
export const ACTION_SET_IS_SCHEDULE_VISIBLE = 'SET_IS_SCHEDULE_VISIBLE';
export const ACTION_TOGGLE_IS_SCHEDULE_VISIBLE = 'ACTION_TOGGLE_IS_SCHEDULE_VISIBLE';
export const ACTION_SET_SEARCH_PARSED = 'SET_SEARCH_PARSED';
export const ACTION_NEXT_DAY = 'ACTION_NEXT_DAY';
export const ACTION_PREV_DAY = 'ACTION_PREV_DAY';

export function setDepartDate(departDate: number) {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate,
    };
}
export function setArriveDate(arriveDate: number) {
    return {
        type: ACTION_SET_ARRIVE_DATE,
        payload: arriveDate,
    };
}
export function setDepartTimeStr(departTimeStr: string) {
    return {
        type: ACTION_SET_DEPART_TIME_STR,
        payload: departTimeStr,
    };
}
export function setArriveTimeStr(arriveTimeStr: string) {
    return {
        type: ACTION_SET_ARRIVE_TIME_STR,
        payload: arriveTimeStr,
    };
}
export function setDepartStation(departStation: any) {
    return {
        type: ACTION_SET_DEPART_STATION,
        payload: departStation,
    };
}
export function setArriveStation(arriveStation: any) {
    return {
        type: ACTION_SET_ARRIVE_STATION,
        payload: arriveStation,
    };
}
export function setTrainNumber(trainNumber: any) {
    return {
        type: ACTION_SET_TRAIN_NUMBER,
        payload: trainNumber,
    };
}
export function setDurationStr(durationStr: string) {
    return {
        type: ACTION_SET_DURATION_STR,
        payload: durationStr,
    };
}
export function setTickets(tickets: any[]) {
    return {
        type: ACTION_SET_TICKETS,
        payload: tickets,
    };
}
export function setIsScheduleVisible(isScheduleVisible: boolean) {
    return {
        type: ACTION_SET_IS_SCHEDULE_VISIBLE,
        payload: isScheduleVisible,
    };
}
export function toggleIsScheduleVisible() {
    return {
        type: ACTION_TOGGLE_IS_SCHEDULE_VISIBLE
    }
}
export function setSearchParsed(searchParsed: boolean) {
    return {
        type: ACTION_SET_SEARCH_PARSED,
        payload: searchParsed,
    };
}

export function nextDate() {
    return {
        type: ACTION_NEXT_DAY
    }
}

export function prevDate() {
    return {
        type: ACTION_PREV_DAY
    }
}