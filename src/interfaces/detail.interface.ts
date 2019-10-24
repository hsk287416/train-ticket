export interface IDetail {
    departDate: number;
    arriveDate: number;
    departTimeStr: string;
    arriveTimeStr: string;
    trainNumber: string;
    departStation: string;
    arriveStation: string;
    durationStr: string;
    toggleIsScheduleVisible: () => void;
}