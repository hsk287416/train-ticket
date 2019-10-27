import React, { useCallback, useEffect, useMemo, Fragment } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { IOrder } from '../../interfaces/order.interface';
import { Dispatch, bindActionCreators } from 'redux';
import { IOrderProps } from '../../interfaces/order-props.interface';
import Header from '../../common/header/Header';
import URI from 'urijs';
import * as orderActions from '../redux/actions';
import dayjs from 'dayjs';
import Detail from '../../common/detail/Detail';
import Ticket from '../ticket/Ticket';
import Passengers from '../passengers/Passengers';

const App: React.FC<IOrderProps> = (props: IOrderProps) => {
  const {
    trainNumber,
    departStation,
    arriveStation,
    seatType,
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    durationStr,
    price,
    passengers,
    menu,
    isMenuVisible,
    searchParsed,
    error,
    dispatch,
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  useEffect(() => {
    const queries: any = URI.parseQuery(window.location.search);
    const { trainNumber, dStation, aStation, type, date } = queries;
    dispatch(orderActions.setDepartStation(dStation));
    dispatch(orderActions.setArriveStation(aStation));
    dispatch(orderActions.setTrainNumber(trainNumber));
    dispatch(orderActions.setSeatType(type));
    dispatch(orderActions.setDepartDate(dayjs(date).valueOf()));
    dispatch(orderActions.setSearchParsed(true));
  }, []);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }
    const url = new URI('/rest/order')
      .setSearch('dStation', departStation)
      .setSearch('aStation', arriveStation)
      .setSearch('type', seatType)
      .setSearch('date', dayjs(departDate).format('YYYY-MM-DD'))
      .toString();
      dispatch(orderActions.fetchInitial(url));
  }, [searchParsed, departStation, arriveStation, seatType, departDate]);

  const passengerCbs =  useMemo(() => {
    return bindActionCreators({
      'createAdult': orderActions.createAdult,
      'createChild': orderActions.createChild,
      'removePassenger': orderActions.removePassenger,
      'updatePassenger': orderActions.updatePassenger,
    }, dispatch);
  }, []);

  if (!searchParsed) {
    return null;
  }

  return (
    <div className="app">
      <div className="header-wrapper">
        <Header title="订单填写" onBack={onBack} />
      </div>
      <div className="detail-wrapper">
        <Detail departDate={departDate}
          arriveDate={arriveDate}
          departTimeStr={departTimeStr}
          arriveTimeStr={arriveTimeStr}
          trainNumber={trainNumber}
          departStation={departStation}
          arriveStation={arriveStation}
          durationStr={durationStr}>
            <span className="train-icon" style={{display: 'block'}}></span>
          </Detail>
      </div>
      <Ticket price={price} type={seatType} />
      <Passengers passengers={passengers} {...passengerCbs}/>
    </div>
  );
}

const mapStateToProps = (state: IOrder) => {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
