import { IHome } from "../../interfaces/home.interface";
import * as homeActions from './action';
import { AnyAction, Reducer } from "redux";

const initialState: IHome = {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    departDate: Date.now(),
    highSpeed: false,
};

const homeReducer: Reducer<IHome, AnyAction> = (state: IHome = initialState, action: AnyAction) => {
    const newState = JSON.parse(JSON.stringify(state)) as IHome;
    switch (action.type) {
        case homeActions.SET_FROM:
            newState.from = action.payload;
            break;
        case homeActions.SET_TO:
            newState.to = action.payload;
            break;
        case homeActions.SET_IS_LOADING_CITY_DATA:
            newState.isLoadingCityData = action.payload;
            break;
        case homeActions.SET_CITY_DATA:
            newState.cityData = action.payload;
            break;
        case homeActions.TOOGLE_HIGH_SPEED:
            newState.highSpeed = action.payload;
            break;
        case homeActions.SET_IS_CITY_SELECTOR_VISIBLE:
            newState.isCitySelectorVisible = action.payload;
            break;
        case homeActions.SET_CURRENT_SELECTING_LEFT_CITY:
            newState.currentSelectingLeftCity = action.payload;
            break;
        case homeActions.TOOGLE_DATE_SELECTOR:
            newState.isDateSelectorVisible = action.payload;
            break;
        case homeActions.SET_DEPART_DATE:
            newState.departDate = action.payload;
            break;
        default:
            break;
    }
    return newState;
}

export default homeReducer;
