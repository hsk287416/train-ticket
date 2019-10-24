import React, { memo, useState, useCallback } from 'react';
import './Candidate.css';
import { ICandidate } from '../../interfaces/candidate.interface';
import Seat from './Seat';

const Candidate: React.FC<ICandidate> = (props: ICandidate) => {
    const {
        tickets
    } = props;

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const onToggle = useCallback((index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index);
    }, [expandedIndex]);

    return (
        <div className="candidate">
            <ul>
                {
                    tickets.map((ticket: any, index: number) => {
                        return <Seat expanded={expandedIndex === index} onToggle={onToggle} idx={index} {...ticket} key={ticket.type} />
                    })
                }
            </ul>
        </div>
    )
}

export default memo(Candidate);