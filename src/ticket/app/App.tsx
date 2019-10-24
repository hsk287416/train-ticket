import React, { useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { ITicket } from '../../interfaces/ticket.interface';
import { Dispatch, bindActionCreators } from 'redux';
import Detail from '../../common/detail/Detail';
import URI from 'urijs';
import * as ticketActions from '../redux/actions';
import dayjs from 'dayjs';
import { clearTime } from '../../functions/date-utils.func';
import Header from '../../common/header/Header';
import Nav from '../../common/nav/Nav';
import Candidate from '../candidate/Candidate';
import { TrainContext } from '../Context';

const Schedule = lazy(() => import('../schedule/Schedule'));

const App: React.FC<any> = (props: any) => {
  const {
    departDate,
    arriveDate,
    departTimeStr,
    arriveTimeStr,
    departStation,
    arriveStation,
    trainNumber,
    durationStr,
    tickets,
    isScheduleVisible,
    searchParsed,
    dispatch,
    scheduleInfo
  } = props;

  useEffect(() => {
    const quries: any = URI.parseQuery(window.location.search);
    const {
      aStation,
      dStation,
      date,
      trainNumber,
    } = quries;
    dispatch(ticketActions.setDepartStation(dStation));
    dispatch(ticketActions.setArriveStation(aStation));
    dispatch(ticketActions.setTrainNumber(trainNumber));
    dispatch(ticketActions.setDepartDate(clearTime(dayjs(date)).getTime()));
    dispatch(ticketActions.setSearchParsed(true));
  }, []);

  useEffect(() => {
    if (!searchParsed) {
      return;
    }
    dispatch(ticketActions.requestTicket());
  }, [searchParsed]);

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const navCbs = useMemo(() => {
    return bindActionCreators({
      'next': ticketActions.nextDate,
      'prev': ticketActions.prevDate,
    }, dispatch);
  }, []);

  const detailCbs = useMemo(() => {
    return bindActionCreators({
      'toggleIsScheduleVisible': ticketActions.toggleIsScheduleVisible,
    }, dispatch);
  }, []);

  const scheduleCbs = useMemo(() => {
    return bindActionCreators({
      'requestSchedule': ticketActions.requestSchedule,
    }, dispatch);
  }, []);

  if (!searchParsed) {
    return null;
  }

  return (
    <div className="app">
      <div className="header-wrapper">
        <Header title={trainNumber} onBack={onBack} />
      </div>
      <div className="nav-wrapper">
        <Nav date={departDate}
          {...navCbs}
        />
      </div>
      <div className="detail-wrapper">
        <Detail departDate={departDate}
          arriveDate={arriveDate}
          departTimeStr={departTimeStr}
          arriveTimeStr={arriveTimeStr}
          trainNumber={trainNumber}
          departStation={departStation}
          arriveStation={arriveStation}
          durationStr={durationStr}
          {...detailCbs} />
      </div>
      <TrainContext.Provider value={{
        'trainNumber': trainNumber,
        'dStation': departStation,
        'aStation': arriveStation,
        'date': departDate
      }}>
        <Candidate tickets={tickets} />
      </TrainContext.Provider>
      {
        isScheduleVisible && <div className="mask" onClick={() => dispatch(ticketActions.toggleIsScheduleVisible())}>
          <Suspense fallback={<div>loading...</div>}>
            <Schedule date={departDate}
              trainNumber={trainNumber}
              departStation={departStation}
              arriveStation={arriveStation}
              scheduleInfo={scheduleInfo}
              {...scheduleCbs} />
          </Suspense>
        </div>
      }
    </div>
  );
}

const mapStateToProps = (state: ITicket) => {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  'dispatch': dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
