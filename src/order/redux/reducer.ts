import { IOrder } from "../../interfaces/order.interface";
import { Reducer, AnyAction, Dispatch } from "redux";
import * as orderActions from './actions';

const initialState: IOrder = {
    trainNumber: '',
    departStation: '',
    arriveStation: '',
    seatType: null,
    departDate: Date.now(),
    arriveDate: Date.now(),
    departTimeStr: '',
    arriveTimeStr: '',
    durationStr: '',
    price: '',
    passengers: [],
    menu: null,
    isMenuVisible: false,
    searchParsed: false,
    error: '',
}

let passengerIdSeed = 0;

const orderReducer: Reducer<IOrder, AnyAction> = (state: IOrder = initialState, action: AnyAction) => {
    let newState = JSON.parse(JSON.stringify(state)) as IOrder;
    const { type, payload } = action;

    switch (type) {
        case orderActions.ACTION_CREATE_ADULT:
            newState = createAdult(newState);
            break;
        case orderActions.ACTION_CREATE_CHILD:
            newState = createChild(newState);
            break;
        case orderActions.ACTION_REMOVE_PASSENGER:
            newState = removePassenger(newState, payload);
            break;
        case orderActions.ACTION_UPDATE_PASSENGER:
            newState = updatePassenger(newState, payload);
            break;
        case orderActions.ACTION_SHOW_MENU:
            newState.menu = payload;
            newState.isMenuVisible = true;
            break;
        case orderActions.ACTION_SHOW_GENDER_MENU:
            newState = showGenderMenu(newState, payload);
            break;
        case orderActions.ACTION_SHOW_FOLLOW_ADULT_MENU:
            newState = showFollowAdultMenu(newState, payload);
            break;
        case orderActions.ACTION_SHOW_TICKET_TYPE_MENU:
            newState = showTicketTypeMenu(newState, payload);
            break;
        case orderActions.ACTION_SET_TRAIN_NUMBER:
            newState.trainNumber = payload;
            break;
        case orderActions.ACTION_SET_DEPART_STATION:
            newState.departStation = payload;
            break;
        case orderActions.ACTION_SET_ARRIVE_STATION:
            newState.arriveStation = payload;
            break;
        case orderActions.ACTION_SET_SEAT_TYPE:
            newState.seatType = payload;
            break;
        case orderActions.ACTION_SET_DEPART_DATE:
            newState.departDate = payload;
            break;
        case orderActions.ACTION_SET_ARRIVE_DATE:
            newState.arriveDate = payload;
            break;
        case orderActions.ACTION_SET_DEPART_TIME_STR:
            newState.departTimeStr = payload;
            break;
        case orderActions.ACTION_SET_ARRIVE_TIME_STR:
            newState.arriveTimeStr = payload;
            break;
        case orderActions.ACTION_SET_DURATION_STR:
            newState.durationStr = payload;
            break;
        case orderActions.ACTION_SET_PRICE:
            newState.price = payload;
            break;
        case orderActions.ACTION_SET_PASSENGERS:
            newState.passengers = payload;
            break;
        case orderActions.ACTION_SET_MENU:
            newState.menu = payload;
            break;
        case orderActions.ACTION_SET_IS_MENU_VISIBLE:
            newState.isMenuVisible = payload;
            break;
        case orderActions.ACTION_SET_SEARCH_PARSED:
            newState.searchParsed = payload;
            break;
    }

    return newState;
}

const createAdult = (state: IOrder): IOrder => {
    for (let passenger of state.passengers) {
        const keys = Object.keys(passenger);
        for (let key of keys) {
            if (!passenger[key]) {
                return state;
            }
        }
    }
    state.passengers = [
        ...state.passengers,
        {
            id: ++passengerIdSeed,
            name: '',
            ticketType: 'adult',
            licenceNo: '',
            seat: 'Z',
        },
    ];
    return state;
}

const createChild = (state: IOrder): IOrder => {
    const { passengers } = state;

    let adultFound = null;

    for (let passenger of passengers) {
        const keys = Object.keys(passenger);
        for (let key of keys) {
            if (!passenger[key]) {
                return state;
            }
        }

        if (passenger.ticketType === 'adult') {
            adultFound = passenger.id;
        }
    }

    if (!adultFound) {
        state.error = '请至少正确添加一个同行成人';
        return state;
    }

    state.passengers = [
        ...passengers,
        {
            id: ++passengerIdSeed,
            name: '',
            gender: 'none',
            birthday: '',
            followAdult: adultFound,
            ticketType: 'child',
            seat: 'Z',
        },
    ]
    return state;
}

const removePassenger = (state: IOrder, id: number): IOrder => {
    const newPassengers = state.passengers.filter(passenger => {
        return passenger.id !== id && passenger.followAdult !== id;
    });
    state.passengers = newPassengers;
    return state;
}

const updatePassenger = (state: IOrder, payload: any): IOrder => {
    const { id, data, keysToBeRemoved } = payload;
    const { passengers } = state;
    for (let i = 0; i < passengers.length; ++i) {
        if (passengers[i].id === id) {
            const newPassengers = [...passengers];
            newPassengers[i] = Object.assign({}, passengers[i], data);
            for (let key of keysToBeRemoved) {
                delete newPassengers[i][key];
            }
            state.passengers = newPassengers;
            break;
        }
    }
    return state;
}

const showGenderMenu = (state: IOrder, id: number): IOrder => {
    const { passengers } = state;
    const passenger = passengers.find(passenger => passenger.id === id);
    if (!passenger) {
        return state;
    }
    state.isMenuVisible = true;
    state.menu = {
        onPress: (gender: any, dispatch: Dispatch) => {
            dispatch(orderActions.updatePassenger(id, gender));
            dispatch(orderActions.hideMenu());
        },
        options: [
            {
                title: '男',
                value: 'male',
                active: 'male' === passenger.gender,
            },
            {
                title: '女',
                value: 'female',
                active: 'female' === passenger.gender,
            },
        ]
    }
    return state;
}

const showFollowAdultMenu = (state: IOrder, id: number): IOrder => {
    const { passengers } = state;
    const passenger = passengers.find(passenger => passenger.id === id);
    if (!passenger) {
        return state;
    }
    state.isMenuVisible = true;
    state.menu = {
        onPress: (followAdult: any, dispatch: Dispatch) => {
            dispatch(orderActions.updatePassenger(id, { followAdult }));
            dispatch(orderActions.hideMenu());
        },
        options: passengers
            .filter(passenger => passenger.ticketType === 'adult')
            .map(adult => {
                return {
                    title: adult.name,
                    value: adult.id,
                    active: adult.id === passenger.followAdult,
                };
            }),
    }
    return state;
}

const showTicketTypeMenu = (state: IOrder, id: number): IOrder => {
    const { passengers } = state;
    const passenger = passengers.find(passenger => passenger.id === id);
    if (!passenger) {
        return state;
    }

    state.isMenuVisible = true;
    state.menu = {
        onPress: (ticketType: any, dispatch: Dispatch) => {
            if ('audlt' === ticketType) {
                dispatch(orderActions.updatePassenger(id, {
                    'id': id,
                    'data': {
                        ticketType,
                        licenceNo: '',
                    },
                    'keysToBeRemoved': ['gender', 'followAdult', 'birthday']
                }))
            } else {
                const adult = passengers.find(
                    passenger =>
                        passenger.id === id &&
                        passenger.ticketType === 'adult'
                );
                if (adult) {
                    dispatch(orderActions.updatePassenger(id, {
                        'id': id,
                        'data': {
                            ticketType,
                            gender: '',
                            followAdult: adult.id,
                            birthday: '',
                        },
                        'keysToBeRemoved': ['licenceNo']
                    }))
                }
            }
            dispatch(orderActions.hideMenu());
        },
        options: [
            {
                title: '成人票',
                value: 'adult',
                active: 'adult' === passenger.ticketType,
            },
            {
                title: '儿童票',
                value: 'child',
                active: 'child' === passenger.ticketType,
            },
        ],
    }
    return state;
}

export default orderReducer;