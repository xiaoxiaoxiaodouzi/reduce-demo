import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import {Button} from 'antd'
import logo from './logo.svg';
import './App.css';
// React component
class Counter extends Component {

  render() {
    const { maxCount,count, onIncreaseClick, onDecreaseClick}=this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" style={{marginTop:24}}>
          <h3>maxValue:{maxCount}</h3>
          <Button onClick={onIncreaseClick} type='primary'>Increase</Button>
          <span>{count}</span>
          <Button onClick={onDecreaseClick} type='primary'>Decrease</Button>
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.count
  }
}

function add(dispatch){
  dispatch({ type: 'INCREMENT' ,payload:3})
}

function dec(dispatch){
  dispatch({type:'DECREASE',payload:2})
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => {
      add(dispatch);
    },
    onDecreaseClick:()=>{
      dec(dispatch);
    }
  }
}
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
export default App;


