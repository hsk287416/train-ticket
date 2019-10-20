import React, { useCallback, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { IQuery } from '../../interfaces/query.interface';
import { Dispatch } from 'redux';
import Nav from '../../common/nav/Nav';
import List from '../list/List';
import Bottom from '../bottom/Bottom';
import Header from '../../common/header/Header';
import URI from 'urijs';
import * as queryActions from '../redux/actions';
import * as dateUtils from '../../functions/date-utils.func';
import * as commonUtils from '../../functions/common-utils.func';
import dayjs from 'dayjs';
import { IChangeValue } from '../../interfaces/change-value.interface';

const App: React.FC<any> = (props: any) => {

  const {
    from,
    to,
    searchParsed,
    orderType,
    onlyTickets,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    departStations,
    trainTypes,
    ticketTypes,
    departDate,
    highSpeed,
    trainList,
    isFiltersVisible,
    arriveStations,
  } = props;

  const requestData = useCallback(props.requestData, []);
  const nextDate = useCallback(props.nextDate, []);
  const prevDate = useCallback(props.prevDate, []);
  const setHighSpeed = useCallback(props.setHighSpeed, []);
  const toggleOrderType = useCallback(props.toggleOrderType, []);
  const setOnlyTickets = useCallback(props.setOnlyTickets, []);
  const setIsFiltersVisible = useCallback(props.setIsFiltersVisible, []);
  const changeValueList = useCallback(props.changeValueList, []);
  const requestParams = useMemo(() => {
    return commonUtils.getRequestDataParam(props);
  }, [props]);

  useEffect(() => {
    const queries: any = URI.parseQuery(window.location.search);
    const { from, to, hightSpeed, date } = queries;
    props.setFrom(from);
    props.setTo(to);
    props.setHighSpeed(hightSpeed);
    props.setDepartDate(dateUtils.clearTime(dayjs(date).valueOf()));
    props.setSearchParsed(true);
  }, []);

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }
    requestData(requestParams)
  }, [JSON.stringify(requestParams)]);

  return (
    <div>
      <div className="header-wrapper">
        <Header title={`${from} → ${to}`} onBack={onBack} />
      </div>
      <Nav date={departDate} next={nextDate} prev={prevDate} />
      <List list={trainList} />
      <Bottom highSpeed={highSpeed}
        orderType={orderType}
        onlyTickets={onlyTickets}
        isFiltersVisible={isFiltersVisible}
        setHighSpeed={setHighSpeed}
        toggleOrderType={toggleOrderType}
        setIsFiltersVisible={setIsFiltersVisible}
        setOnlyTickets={setOnlyTickets} 
        ticketTypes={ticketTypes}
        trainTypes={trainTypes}
        departStations={departStations}
        arriveStations={arriveStations}
        checkedTicketTypes={checkedTicketTypes}
        checkedTrainTypes={checkedTrainTypes}
        checkedDepartStations={checkedDepartStations}
        checkedArriveStations={checkedArriveStations}
        departTimeStart={departTimeStart}
        departTimeEnd={departTimeEnd}
        arriveTimeStart={arriveTimeStart}
        arriveTimeEnd={arriveTimeEnd}
        changeValueList={changeValueList}/>
    </div>
  );
}

const mapStateToProps = (props: IQuery) => {
  return props;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFrom: (from: string) => {
    dispatch(queryActions.setFrom(from));
  },
  setTo: (to: string) => {
    dispatch(queryActions.setTo(to));
  },
  setDepartDate: (date: any) => {
    dispatch(queryActions.setDepartDate(date));
  },
  setHighSpeed: (higtSpeed: boolean) => {
    dispatch(queryActions.setHighSpeed(higtSpeed));
  },
  setSearchParsed: (searchParsed: boolean) => {
    dispatch(queryActions.setSearchParsed(searchParsed));
  },
  nextDate: () => {
    dispatch(queryActions.nextDate());
  },
  prevDate: () => {
    dispatch(queryActions.prevDate());
  },
  requestData: (params: any) => {
    dispatch(queryActions.requestList(params));
  },
  toggleOrderType: () => {
    dispatch(queryActions.toggleOrderType());
  },
  setOnlyTickets: (value: boolean) => {
    dispatch(queryActions.setOnlyTickets(value))
  },
  setIsFiltersVisible: (value: boolean) => {
    dispatch(queryActions.setIsFiltersVisible(value))
  },
  changeValueList: (params: IChangeValue[]) => {
    dispatch(queryActions.changeValueList(params))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
