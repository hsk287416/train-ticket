export interface IScheduleInfo {
    station: string;
    arriveTime: number;
    departTime: number;
    stay: string;
    isStartStation: boolean;
    isEndStation: boolean;
    isDepartStation: boolean;
    isArriveStation: boolean;
    beforeDepartStation: boolean;
    afterArriveStation: boolean;
}