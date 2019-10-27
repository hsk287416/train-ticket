import { IOrder } from "./order.interface";
import { Dispatch } from "redux";

export interface IOrderProps extends IOrder {
    dispatch: Dispatch;
}