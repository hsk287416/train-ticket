import { Dispatch } from "redux";

export const SET_FROM = 'SET_FROM';
export const SET_TO = 'SET_TO';
export const SET_IS_LOADING_CITY_DATA = 'SET_IS_LOADING_CITY_DATA';
export const SET_CITY_DATA = 'SET_CITY_DATA';
export const TOOGLE_HIGH_SPEED = 'TOOGLE_HIGH_SPEED';
export const SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE';
export const SET_CURRENT_SELECTING_LEFT_CITY = 'SET_CURRENT_SELECTING_LEFT_CITY';
export const SET_SELECTED_CITY = 'SET_SELECTED_CITY';
export const TOOGLE_DATE_SELECTOR = 'TOOGLE_DATE_SELECTOR';
export const EXCHANGE_FROM_TO = 'EXCHANGE_FROM_TO';
export const SET_DEPART_DATE = 'SET_DEPART_DATE';
export const REQUEST_CITY_DATA = 'REQUEST_CITY_DATA';
export const SHOW_CITY_SELECTOR = 'SHOW_CITY_SELECTOR';


export const setForm = (value: string) => {
    return {
        type: SET_FROM,
        payload: value
    }
}

export const setTo = (value: string) => {
    return {
        type: SET_TO,
        payload: value,
    }
}

export const setIsLoadingCityData = (value: boolean) => {
    return {
        type: SET_IS_LOADING_CITY_DATA,
        payload: value,
    };
}

export const setCityData = (data: any[]) => {
    return {
        type: SET_CITY_DATA,
        payload: data,
    };
}

export const toggleHighSpeed = (value: boolean) => {
    return {
        type: TOOGLE_HIGH_SPEED,
        payload: value,
    }
}

export const showCitySelector = (currentSelectingLeftCity: boolean)=> {
    return {
        type: SHOW_CITY_SELECTOR,
        payload: currentSelectingLeftCity
    }
}

export const hideCitySelector = () => {
    return {
        type: SET_IS_CITY_SELECTOR_VISIBLE,
        payload: false,
    }
}

export const setSelectedCity = (city: string) => {
    return (dispatch: Dispatch, getState: any) => {
        const { currentSelectingLeftCity } = getState();
        if (currentSelectingLeftCity) {
            dispatch(setForm(city));
        } else {
            dispatch(setTo(city));
        }
        dispatch(hideCitySelector());
    }
}

export const toggleDateSelector = (value: boolean) => {
    return {
        type: TOOGLE_DATE_SELECTOR,
        payload: value,
    }
}

export const exchangeFromTo = (): any => {
    return {
        type: EXCHANGE_FROM_TO,
    }
}

export const setDepartDate = (departDate: number) => {
    return {
        type: SET_DEPART_DATE,
        payload: departDate,
    }
}

export const requestCityData = () => {
    return {
        type: REQUEST_CITY_DATA,
    }
}