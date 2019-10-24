import { IScheduleInfo } from "./schedule-info.interface";

export interface IScheduleProps {
    date: number;
    trainNumber: string;
    departStation: string;
    arriveStation: string;
    scheduleInfo: IScheduleInfo[];
    requestSchedule: (params: any) => void;
}