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

const App: React.FC<any> = (props: any) => {
  const {
    from,
    to,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    setSelectedCity
  } = props;

  const onBack = useCallback(() => {
    window.history.back();
  }, []);

  const exchangeFromTo = useCallback(props.exchangeFromTo, []);
  const showCitySelector = useCallback(props.showCitySelector, []);
  const hidenCitySelector = useCallback(props.hidenCitySelector, []);
  const loadCityData = useCallback(props.loadCityData, []);


  return (
    <div>
      <div className="header-wrapper">
        <Header title="火车票" onBack={onBack}></Header>
      </div>
      <form className="form">
        <Journey from={from} to={to} exchangeFromTo={exchangeFromTo} showCitySelector={showCitySelector}></Journey>
        <DepartDate></DepartDate>
        <HighSpeed></HighSpeed>
        <Submit></Submit>
      </form>
      <CitySelector show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        onBack={hidenCitySelector}
        loadCityData={loadCityData} 
        onSelect={setSelectedCity} />
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
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
