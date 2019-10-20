import { OrderTypeEnum } from "../enum/order-type.enum";
import { IChangeValue } from "./change-value.interface";

export interface IBottomProps {
    highSpeed: boolean;
    orderType: OrderTypeEnum;
    onlyTickets: boolean;
    isFiltersVisible: boolean;
    
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
    toggleOrderType: () => void;
    setHighSpeed: (isHighSpeed: boolean) => void;
    setOnlyTickets: (isOnlyTickets: boolean) => void;
    setIsFiltersVisible: (isFilterVisable: boolean) => void;
    changeValueList: (params: IChangeValue[]) => void;
}