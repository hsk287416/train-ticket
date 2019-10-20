import React, { useCallback, useMemo } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../../common/header/Header';
import DepartDate from '../depart-date/DepartDate';
import HighSpeed from '../high-speed/HighSpeed';
import Journey from '../journey/Journey';
import Submit from '../submit/Submit';
import { Dispatch } from 'redux';
import * as homeActions from '../redux/action';
import { IHome } from '../../interfaces/home.interface';
import CitySelector from '../../common/city-selector/CitySelector';
import DateSelector from '../../common/date-selector/DateSelector';
import * as dateUtils from '../../functions/date-utils.func';

const App: React.FC<any> = (props: any) => {
  const {
    from,
    to,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    setSelectedCity,
    departDate,
    isDateSelectorVisible,
    highSpeed,
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const exchangeFromTo = useCallback(props.exchangeFromTo, []);
  const showCitySelector = useCallback(props.showCitySelector, []);
  const hidenCitySelector = useCallback(props.hidenCitySelector, []);
  const loadCityData = useCallback(props.loadCityData, []);
  const showDateSelector = useCallback(props.showDateSelector, []);
  const hideDateSelector = useCallback(props.hideDateSelector, []);
  const toggleHighSpeed = useCallback(props.toggleHighSpeed, []);
  const setDepartDate = useCallback((day: any) => {
    if (!day) {
      return;
    }
    if (day < dateUtils.clearTime()) {
      return;
    }
    props.setDepartDate(day);
    hideDateSelector();
  }, []);

  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form className="form" action="./query.html">
        <Journey from={from} to={to} exchangeFromTo={exchangeFromTo} showCitySelector={showCitySelector}></Journey>
        <DepartDate time={departDate} onClick={showDateSelector}></DepartDate>
        <HighSpeed highSpeed={highSpeed} toogle={toggleHighSpeed} ></HighSpeed>
        <Submit></Submit>
      </form>
      <CitySelector show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        onBack={hidenCitySelector}
        loadCityData={loadCityData}
        onSelect={setSelectedCity} />
      <DateSelector show={isDateSelectorVisible}
        onBack={hideDateSelector} 
        onSelect={setDepartDate}/>
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
  },
  hidenCitySelector: () => {
    dispatch(homeActions.hideCitySelector())
  },
  loadCityData: () => {
    dispatch(homeActions.requestCityData())
  },
  setSelectedCity: (city: string) => {
    dispatch(homeActions.setSelectedCity(city))
  },
  showDateSelector: () => {
    dispatch(homeActions.toggleDateSelector(true))
  },
  hideDateSelector: () => {
    dispatch(homeActions.toggleDateSelector(false))
  },
  setDepartDate: (date: any) => {
    dispatch(homeActions.setDepartDate(date));
  },
  toggleHighSpeed: (show: any) => {
    dispatch(homeActions.toggleHighSpeed(show))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
