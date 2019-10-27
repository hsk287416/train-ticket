import React, { memo, useState, useCallback, useMemo } from 'react';

const Passenger: React.FC<any> = (props: any) => {
    const {
        id,
        name,
        followAdult,
        ticketType,
        licenceNo,
        gender,
        birthday,
        onRemove,
        onUpdate,
    } = props;

    const [pname, setPname] = useState<string>(name);
    const [plicence, setPlicence] = useState<string>(licenceNo || '');
    const [pgender, setPgender] = useState(gender);
    const [pbirthday, setPbirthday] = useState<string>(birthday || '');

    const updateName = useCallback(() => {
        onUpdate(id, { 'name': pname });
    }, [pname, id]);

    const updateLicenceNo = useCallback(() => {
        onUpdate(id, { 'licenceNo': plicence });
    }, [plicence, id]);

    const updateGender = useCallback(() => {
        onUpdate(id, { 'gender': pgender });
    }, [id, pgender]);

    const updateBirthday = useCallback(() => {
        onUpdate(id, {'birthday': pbirthday});
    }, [id, pbirthday]);

    const isAudlt = useMemo(() => {
        return ticketType === 'adult'
    }, [ticketType]);

    return (
        <li className="passenger">
            <i className="delete" onClick={() => onRemove(id)}>
                -
            </i>
            <ol className="items">
                <li className="item">
                    <label htmlFor="name" className="label name">姓名</label>
                    <input type="text"
                        id="name"
                        className="input name"
                        placeholder="乘客姓名"
                        value={pname}
                        onChange={(e) => setPname(e.target.value)}
                        onBlur={updateName} />
                    <label className="ticket-type">{isAudlt ? '成人票' : '儿童票'}</label>
                </li>
                {
                    isAudlt && <li className="item">
                        <label htmlFor="licenceNo" className="label licenceNo">身份证</label>
                        <input type="text"
                            id="licenceNo"
                            className="input licenceNo"
                            placeholder="证件号码"
                            value={plicence}
                            onChange={e => setPlicence(e.target.value)}
                            onBlur={updateLicenceNo} />
                    </li>
                }
                {
                    !isAudlt && <li className="item arrow">
                        <label htmlFor="gender" className="label gender">性别</label>
                        <input type="text"
                            id="gender"
                            className="input gender"
                            placeholder="请选择"
                            readOnly
                            value={gender === 'male' ? '男' : gender === 'female' ? '女': ''} />
                    </li>
                }
                {
                    !isAudlt && <li className="item">
                        <label htmlFor="birthday" className="label birthday">出生日期</label>
                        <input type="text"
                            id="birthday"
                            className="input birthday"
                            placeholder="如：1990/09/28"
                            value={pbirthday}
                            onChange={e => setPbirthday(e.target.value)}
                            onBlur={updateBirthday} />
                    </li>
                }
            </ol>
        </li>
    )
}

export default memo(Passenger);