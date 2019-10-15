import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from '../../common/header/Header';
import DepartDate from '../depart-date/DepartDate';
import HighSpeed from '../high-speed/HighSpeed';
import Journey from '../journey/Journey';
import Submit from '../submit/Submit';
import { Dispatch } from 'redux';
import { setForm } from '../redux/action';
import { IHome } from '../../interfaces/home.interface';

const App: React.FC<any> = (props: any) => {
  return (
    <div>
      <Header></Header>
      <Journey></Journey>
      <DepartDate></DepartDate>
      <HighSpeed></HighSpeed>
      <Submit></Submit>
    </div>
  );
}

const mapStateToProps = (state: IHome) => {
  return {
    from: state.from,
    to: state.to,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFrom: (value: string) => {
    dispatch(setForm(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
