import { IQuery } from "../interfaces/query.interface";

export const getRequestDataParam = (props: IQuery) => {
    const params = {
        from: props.from,
        to: props.to,
        departDate: props.departDate,
        highSpeed: props.highSpeed,
        orderType: props.orderType,
        onlyTickets: props.onlyTickets,
        checkedTicketTypes: props.checkedTrainTypes,
        checkedTrainTypes: props.checkedTicketTypes,
        checkedDepartStations: props.checkedDepartStations,
        checkedArriveStations: props.checkedArriveStations,
        departTimeStart: props.departTimeStart,
        departTimeEnd: props.departTimeEnd,
        arriveTimeStart: props.arriveTimeStart,
        arriveTimeEnd: props.arriveTimeEnd,
    };
    return params;
}