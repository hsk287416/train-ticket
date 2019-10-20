import { IChangeValue, IChangeValueList } from "../../interfaces/change-value.interface";

export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';
export const ACTION_SET_TRAIN_LIST = 'SET_TRAIN_LIST';
export const ACTION_SET_ORDER_TYPE = 'SET_ORDER_TYPE';
export const ACTION_SET_ONLY_TICKETS = 'SET_ONLY_TICKETS';
export const ACTION_SET_TICKET_TYPES = 'SET_TICKET_TYPES';
export const ACTION_SET_CHECKED_TICKET_TYPES = 'SET_CHECKED_TICKET_TYPES';
export const ACTION_SET_TRAIN_TYPES = 'SET_TRAIN_TYPES';
export const ACTION_SET_CHECKED_TRAIN_TYPES = 'SET_CHECKED_TRAIN_TYPES';
export const ACTION_SET_DEPART_STATIONS = 'SET_DEPART_STATIONS';
export const ACTION_SET_CHECKED_DEPART_STATIONS = 'SET_CHECKED_DEPART_STATIONS';
export const ACTION_SET_ARRIVE_STATIONS = 'SET_ARRIVE_STATIONS';
export const ACTION_SET_CHECKED_ARRIVE_STATIONS = 'SET_CHECKED_ARRIVE_STATIONS';
export const ACTION_SET_DEPART_TIME_START = 'SET_DEPART_TIME_START';
export const ACTION_SET_DEPART_TIME_END = 'SET_DEPART_TIME_END';
export const ACTION_SET_ARRIVE_TIME_START = 'SET_ARRIVE_TIME_START';
export const ACTION_SET_ARRIVE_TIME_END = 'SET_ARRIVE_TIME_END';
export const ACTION_SET_IS_FILTERS_VISIBLE = 'SET_IS_FILTERS_VISIBLE';
export const ACTION_SET_SEARCH_PARSED = 'SET_SEARCH_PARSED';
export const ACTION_TOGGLE_ORDER_TYPE = 'TOGGLE_ORDER_TYPE';
export const ACTION_NEXT_DAY = 'NEXT_DAY';
export const ACTION_PREV_DAY = 'PREV_DAY';
export const ACTION_REQUEST_LIST = 'REQUEST_LIST';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHANGE_VALUE_LIST = 'CHANGE_VALUE_LIST';

export const setFrom = (from: string) => {
    return {
        type: ACTION_SET_FROM,
        payload: from,
    };
}
export const setTo = (to: string) => {
    return {
        type: ACTION_SET_TO,
        payload: to,
    };
}
export const setDepartDate = (departDate: any) => {
    return {
        type: ACTION_SET_DEPART_DATE,
        payload: departDate,
    };
}
export const setHighSpeed = (highSpeed: boolean) => {
    return {
        type: ACTION_SET_HIGH_SPEED,
        payload: highSpeed,
    };
}

export const setTrainList = (trainList: any[]) => {
    return {
        type: ACTION_SET_TRAIN_LIST,
        payload: trainList,
    };
}

export const toggleOrderType = () => {
    return {
        type: ACTION_TOGGLE_ORDER_TYPE
    }
}

export const setOnlyTickets = (onlyTickets: boolean) => {
    return {
        type: ACTION_SET_ONLY_TICKETS,
        payload: onlyTickets,
    }
}

export const setTicketTypes = (ticketTypes: any[]) => {
    return {
        type: ACTION_SET_TICKET_TYPES,
        payload: ticketTypes,
    };
}

export const setCheckedTicketTypes = (checkedTicketTypes: any) => {
    return {
        type: ACTION_SET_CHECKED_TICKET_TYPES,
        payload: checkedTicketTypes,
    };
}
export const setTrainTypes = (trainTypes: any[]) => {
    return {
        type: ACTION_SET_TRAIN_TYPES,
        payload: trainTypes,
    };
}
export const setCheckedTrainTypes = (checkedTrainTypes: any) => {
    return {
        type: ACTION_SET_CHECKED_TRAIN_TYPES,
        payload: checkedTrainTypes,
    };
}
export const setDepartStations = (departStations: any[]) => {
    return {
        type: ACTION_SET_DEPART_STATIONS,
        payload: departStations,
    };
}
export const setCheckedDepartStations = (checkedDepartStations: any) => {
    return {
        type: ACTION_SET_CHECKED_DEPART_STATIONS,
        payload: checkedDepartStations,
    };
}
export const setArriveStations = (arriveStations: any[]) => {
    return {
        type: ACTION_SET_ARRIVE_STATIONS,
        payload: arriveStations,
    };
}
export const setCheckedArriveStations = (checkedArriveStations: any) => {
    return {
        type: ACTION_SET_CHECKED_ARRIVE_STATIONS,
        payload: checkedArriveStations,
    };
}
export const setDepartTimeStart = (departTimeStart: number) => {
    return {
        type: ACTION_SET_DEPART_TIME_START,
        payload: departTimeStart,
    };
}
export const setDepartTimeEnd = (departTimeEnd: number) => {
    return {
        type: ACTION_SET_DEPART_TIME_END,
        payload: departTimeEnd,
    };
}
export const setArriveTimeStart = (arriveTimeStart: number) => {
    return {
        type: ACTION_SET_ARRIVE_TIME_START,
        payload: arriveTimeStart,
    };
}
export const setArriveTimeEnd = (arriveTimeEnd: number) => {
    return {
        type: ACTION_SET_ARRIVE_TIME_END,
        payload: arriveTimeEnd,
    };
}
export const setIsFiltersVisible = (isFilterVisible: boolean) => {
    return {
        type: ACTION_SET_IS_FILTERS_VISIBLE,
        payload: isFilterVisible,
    };
}
export const setSearchParsed = (searchParsed: boolean) => {
    return {
        type: ACTION_SET_SEARCH_PARSED,
        payload: searchParsed,
    };
}

export const nextDate = () => {
    return {
        type: ACTION_NEXT_DAY
    }
}
export const prevDate = () => {
    return {
        type: ACTION_PREV_DAY
    }
}

export const requestList = (params: any) => {
    return {
        type: ACTION_REQUEST_LIST,
        payload: params
    }
}

export const changeValue = (params: IChangeValue) => {
    return {
        type: CHANGE_VALUE,
        payload: params
    }
}

export const changeValueList = (params: IChangeValue[]) => {
    return {
        type: CHANGE_VALUE_LIST,
        payload: params
    }
}