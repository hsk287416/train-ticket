import React, { memo } from 'react';
import './Passengers.css';
import Passenger from './Passenger';

const Passengers: React.FC<any> = (props: any) => {

    const {
        passengers,
        createAdult,
        createChild,
        removePassenger,
        updatePassenger,
    } = props;

    return (
        <div className="passengers">
            <ul>
                {
                    passengers.map((passenger: any) => {
                        return <Passenger {...passenger}
                            onRemove={removePassenger}
                            onUpdate={updatePassenger}
                            key={passenger.id} />
                    })
                }
            </ul>
            <section className="add">
                <div className="adult" onClick={createAdult}>添加成人</div>
                <div className="child" onClick={createChild}>添加儿童</div>
            </section>
        </div>
    )
}

export default memo(Passengers);
