import React from 'react';
import './Ticket.css';
import { ITicketProps } from '../../interfaces/ticket-props.interface';

const Ticket: React.FC<ITicketProps> = (props: ITicketProps) => {
    const { price, type } = props;
    return <div className="ticket">
        <p>
            <span className="ticket-type">{type}</span>
            <span className="ticket-price">{price}</span>
        </p>
        <div className="label">坐席</div>
    </div>
}

export default Ticket;
