export const ACTION_SET_TRAIN_NUMBER = 'SET_TRAIN_NUMBER';
export const ACTION_SET_DEPART_STATION = 'SET_DEPART_STATION';
export const ACTION_SET_ARRIVE_STATION = 'SET_ARRIVE_STATION';
export const ACTION_SET_SEAT_TYPE = 'SET_SEAT_TYPE';
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
export const ACTION_SET_ARRIVE_DATE = 'SET_ARRIVE_DATE';
export const ACTION_SET_DEPART_TIME_STR = 'SET_DEPART_TIME_STR';
export const ACTION_SET_ARRIVE_TIME_STR = 'SET_ARRIVE_TIME_STR';
export const ACTION_SET_DURATION_STR = 'SET_DURATION_STR';
export const ACTION_SET_PRICE = 'SET_PRICE';
export const ACTION_SET_PASSENGERS = 'SET_PASSENGERS';
export const ACTION_SET_MENU = 'SET_MENU';
export const ACTION_SET_IS_MENU_VISIBLE = 'SET_IS_MENU_VISIBLE';
export const ACTION_SET_SEARCH_PARSED = 'SET_SEARCH_PARSED';
export const ACTION_FEATCH_INITDATA = 'ACTION_FEATCH_INITDATA';
export const ACTION_CREATE_ADULT = 'ACTION_CREATE_ADULT';
export const ACTION_CREATE_CHILD = 'ACTION_CREATE_CHILD';
export const ACTION_ERROR = 'ACTION_ERROR';
export const ACTION_REMOVE_PASSENGER = 'ACTION_REMOVE_PASSENGER';
export const ACTION_UPDATE_PASSENGER = 'ACTION_UPDATE_PASSENGER';
export const ACTION_SHOW_MENU = 'ACTION_SHOW_MENU';
export const ACTION_SHOW_GENDER_MENU = 'ACTION_SHOW_GENDER_MENU';
export const ACTION_SHOW_FOLLOW_ADULT_MENU = 'ACTION_SHOW_FOLLOW_ADULT_MENU';
export const ACTION_SHOW_TICKET_TYPE_MENU = 'ACTION_SHOW_TICKET_TYPE_MENU';

export function setTrainNumber(trainNumber: string) {
    return {
        type: ACTION_SET_TRAIN_NUMBER,
        payload: trainNumber,
    };
}
export function setDepartStation(departStation: string) {
    return {
        type: ACTION_SET_DEPART_STATION,
        payload: departStation,
    };
}
export function setArriveStation(arriveStation: string) {
    return {
        type: ACTION_SET_ARRIVE_STATION,
        payload: arriveStation,
    };
}
export function setSeatType(seatType: any) {
    return {
        type: ACTION_SET_SEAT_TYPE,
        payload: seatType,
    };
}
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
export function setDurationStr(durationStr: string) {
    return {
        type: ACTION_SET_DURATION_STR,
        payload: durationStr,
    };
}
export function setPrice(price: string) {
    return {
        type: ACTION_SET_PRICE,
        payload: price,
    };
}
export function setPassengers(passengers: any[]) {
    return {
        type: ACTION_SET_PASSENGERS,
        payload: passengers,
    };
}
export function setMenu(menu: any) {
    return {
        type: ACTION_SET_MENU,
        payload: menu,
    };
}
export function setIsMenuVisible(isMenuVisible: boolean) {
    return {
        type: ACTION_SET_IS_MENU_VISIBLE,
        payload: isMenuVisible,
    };
}
export function setSearchParsed(searchParsed: boolean) {
    return {
        type: ACTION_SET_SEARCH_PARSED,
        payload: searchParsed,
    };
}

export function fetchInitial(url: string) {
    return {
        type: ACTION_FEATCH_INITDATA,
        payload: url
    }
}

export function createAdult() {
    return {
        type: ACTION_CREATE_ADULT,
    }
}

export function createChild() {
    return {
        type: ACTION_CREATE_CHILD
    }
}

export function removePassenger(id: number) {
    return {
        type: ACTION_REMOVE_PASSENGER,
        payload: id,
    }
}

export function updatePassenger(id: number, data: any, keysToBeRemoved: string[] = []) {
    return {
        type: ACTION_UPDATE_PASSENGER,
        payload: {
            'id': id,
            'data': data,
            'keysToBeRemoved': keysToBeRemoved
        }
    }
}

export function showMenu(menu: any) {
    return {
        type: ACTION_SHOW_MENU,
        payload: menu
    }
}

export function showGenderMenu(id: number) {
    return {
        type: ACTION_SHOW_GENDER_MENU,
        payload: id,
    }
}

export function showFollowAdultMenu(id: number) {
    return {
        type: ACTION_SHOW_FOLLOW_ADULT_MENU,
        payload: id,
    }
}

export function showTicketTypeMenu(id: number) {
    return {
        type: ACTION_SHOW_TICKET_TYPE_MENU,
        payload: id
    }
}

export function hideMenu() {
    return setIsMenuVisible(false);
}
