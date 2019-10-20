import { OrderTypeEnum } from "../enum/order-type.enum";

export interface IQuery {
    from: string;
    to: string;
    departDate: any;
    highSpeed: boolean;
    trainList: any[];
    orderType: OrderTypeEnum;
    onlyTickets: boolean;
    ticketTypes: any[];
    checkedTicketTypes: any;
    trainTypes: any[];
    checkedTrainTypes: any;
    departStations: any[];
    checkedDepartStations: any;
    arriveStations: any[];
    checkedArriveStations: any;
    departTimeStart: number;
    departTimeEnd: number;
    arriveTimeStart: number;
    arriveTimeEnd: number;
    isFiltersVisible: boolean;
    searchParsed: boolean;
}