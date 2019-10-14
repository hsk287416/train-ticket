import React from 'react';
import {connect} from 'react-redux';
import './App.css';

const App: React.FC<any> = (props: any) => {
  return (
    <div className="App">
      
    </div>
  );
}

export default connect(
  function mapStateToProps(state) { },
  function mapDispatchToProps(dispatch) { }
)(App);
