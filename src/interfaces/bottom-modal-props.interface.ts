import { IChangeValue } from "./change-value.interface";

export interface IBottomModalProp {
    ticketTypes: any[];
    trainTypes: any[];
    departStations: any[];
    arriveStations: any[];
    checkedTicketTypes: any;
    checkedTrainTypes: any;
    checkedDepartStations: any;
    checkedArriveStations: any;
    departTimeStart: number;
    departTimeEnd: number;
    arriveTimeStart: number;
    arriveTimeEnd: number;
    changeValueList: (params: IChangeValue[]) => void;
    setIsFiltersVisible: (isFilterVisable: boolean) => void;
}