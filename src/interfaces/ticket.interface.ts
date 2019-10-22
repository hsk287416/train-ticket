export interface ITicket {
    departDate: number;
    arriveDate: number;
    departTimeStr: string;
    arriveTimeStr: string;
    departStation: any;
    arriveStation: any;
    trainNumber: any;
    durationStr: string;
    tickets: any[];
    isScheduleVisible: boolean;
    searchParsed: boolean;
}