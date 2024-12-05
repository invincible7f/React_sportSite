import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import React from 'react';
import Main from './Main/Main'

class App extends React.Component {

 mOnWeel =()=> {

 }


  render(){
  return (
    <div className="App" onWheel={this.mOnWeel}>
      < Navbar key={"navbar"}/>
        <Main key="h"/>
    </div>
  );
}
}
export default App;
