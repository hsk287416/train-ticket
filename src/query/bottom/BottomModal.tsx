import React, { memo, useState, useMemo } from 'react';
import { IBottomModalProp } from '../../interfaces/bottom-modal-props.interface';
import Option from './Option';
import Slider from './Slider';

const BottomModal: React.FC<IBottomModalProp> = (props: IBottomModalProp) => {

    const {
        ticketTypes,
        trainTypes,
        departStations,
        arriveStations,
        checkedTicketTypes,
        checkedTrainTypes,
        checkedDepartStations,
        checkedArriveStations,
        departTimeStart,
        departTimeEnd,
        arriveTimeStart,
        arriveTimeEnd,
        changeValueList,
    } = props;

    const [localCheckedTicketTypes, setLocalCheckedTicketTypes] = useState(checkedTicketTypes || {});
    const [localCheckedTrainTypes, setLocalCheckedTrainTypes] = useState(checkedTrainTypes || {});
    const [localCheckedDepartStations, setLocalCheckedDepartStations] = useState(checkedDepartStations || {});
    const [localCheckedArriveStations, setLocalCheckedArriveStations] = useState(checkedArriveStations || {});
    const [localDepartTimeStart, setlocalDepartTimeStart] = useState(departTimeStart);
    const [localDepartTimeEnd, setlocalDepartTimeEnd] = useState(departTimeEnd);
    const [localArriveTimeStart, setlocalArriveTimeStart] = useState(arriveTimeStart);
    const [localArriveTimeEnd, setlocalArriveTimeEnd] = useState(arriveTimeEnd);

    const optionGroup = [
        {
            title: '坐席类型',
            options: ticketTypes,
            checkedMap: localCheckedTicketTypes,
            update: setLocalCheckedTicketTypes,
        },
        {
            title: '车次类型',
            options: trainTypes,
            checkedMap: localCheckedTrainTypes,
            update: setLocalCheckedTrainTypes,
        },
        {
            title: '出发车站',
            options: departStations,
            checkedMap: localCheckedDepartStations,
            update: setLocalCheckedDepartStations,
        },
        {
            title: '到达车站',
            options: arriveStations,
            checkedMap: localCheckedArriveStations,
            update: setLocalCheckedArriveStations,
        },
    ];

    const sure = () => {
        changeValueList([
            {
                target: 'checkedTicketTypes',
                value: localCheckedTicketTypes,
            },
            {
                target: 'checkedTrainTypes',
                value: localCheckedTrainTypes,
            },
            {
                target: 'checkedDepartStations',
                value: localCheckedDepartStations,
            },
            {
                target: 'checkedArriveStations',
                value: localCheckedArriveStations,
            },
            {
                target: 'departTimeStart',
                value: localDepartTimeStart,
            },
            {
                target: 'departTimeEnd',
                value: localDepartTimeEnd,
            },
            {
                target: 'arriveTimeStart',
                value: localArriveTimeStart,
            },
            {
                target: 'arriveTimeEnd',
                value: localArriveTimeEnd,
            },
            {
                target: 'isFiltersVisible',
                value: false,
            }
        ])
    };

    const isDisableReset = useMemo(() => {
        return Object.keys(localCheckedTicketTypes).length === 0 &&
            Object.keys(localCheckedTrainTypes).length === 0 &&
            Object.keys(localCheckedDepartStations).length === 0 &&
            Object.keys(localCheckedArriveStations).length === 0 &&
            localDepartTimeStart === 0 &&
            localDepartTimeEnd === 24 &&
            localArriveTimeStart === 0 &&
            localArriveTimeEnd === 24;
    }, [localCheckedTicketTypes, localCheckedTrainTypes, localCheckedDepartStations, localCheckedArriveStations, 
        localDepartTimeStart, localDepartTimeEnd, localArriveTimeStart, localArriveTimeEnd]);

    const reset = () => {
        if (isDisableReset) {
            return;
        }
        setLocalCheckedTicketTypes({});
        setLocalCheckedTrainTypes({});
        setLocalCheckedDepartStations({});
        setLocalCheckedArriveStations({});
        setlocalDepartTimeStart(0);
        setlocalDepartTimeEnd(24);
        setlocalArriveTimeStart(0);
        setlocalArriveTimeEnd(24);
    }



    return (
        <div className="bottom-modal">
            <div className="bottom-dialog">
                <div className="bottom-dialog-content">
                    <div className="title">
                        <span className={`reset ${isDisableReset ? 'disabled' : null}`} onClick={reset}>重置</span>
                        <span className="ok" onClick={sure}>确定</span>
                    </div>
                    <div className="options">
                        {
                            optionGroup.map((group: any) => <Option title={group.title}
                                options={group.options}
                                checkedMap={group.checkedMap}
                                update={group.update}
                                key={group.title} />)
                        }
                    </div>
                    <Slider title="出发时间"
                        currentEndHours={localDepartTimeEnd}
                        currentStartHours={localDepartTimeStart}
                        onStartChanged={setlocalDepartTimeStart}
                        onEndChanged={setlocalDepartTimeEnd} />
                    <Slider title="到达时间"
                        currentEndHours={localArriveTimeEnd}
                        currentStartHours={localArriveTimeStart}
                        onStartChanged={setlocalArriveTimeStart}
                        onEndChanged={setlocalArriveTimeEnd} />
                </div>
            </div>
        </div>
    )
}

export default memo(BottomModal);