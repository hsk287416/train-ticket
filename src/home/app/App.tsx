import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../../common/header/Header';
import DepartDate from '../depart-date/DepartDate';
import HighSpeed from '../high-speed/HighSpeed';
import Journey from '../journey/Journey';
import Submit from '../submit/Submit';
import { Dispatch, bindActionCreators } from 'redux';
import * as homeActions from '../redux/action';
import { IHome } from '../../interfaces/home.interface';

const App: React.FC<any> = (props: any) => {
  const {
    from,
    to
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const exchangeFromTo = useCallback(props.exchangeFromTo, []);
  const showCitySelector = useCallback(props.showCitySelector, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form action="" className="form">
        <Journey from={from} to={to} exchangeFromTo={exchangeFromTo} showCitySelector={showCitySelector}></Journey>
        <DepartDate></DepartDate>
        <HighSpeed></HighSpeed>
        <Submit></Submit>
      </form>
    </div>
  );
}

const mapStateToProps = (state: IHome) => {
  return state;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFrom: (value: string) => {
    dispatch(homeActions.setForm(value))
  },
  exchangeFromTo: () => {
    dispatch(homeActions.exchangeFromTo())
  },
  showCitySelector: (value: boolean) => {
    dispatch(homeActions.showCitySelector(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
