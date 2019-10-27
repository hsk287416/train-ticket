export interface IOrder {
    trainNumber: string;
    departStation: string;
    arriveStation: string;
    seatType: any;
    departDate: number;
    arriveDate: number;
    departTimeStr: string;
    arriveTimeStr: string;
    durationStr: string;
    price: string;
    passengers: any[];
    menu: any;
    isMenuVisible: boolean;
    searchParsed: boolean;
    error: string;
}
