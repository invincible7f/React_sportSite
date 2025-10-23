

import Navbar from './Navbar/Navbar';
import React from 'react';
import Main from './Main/Main'
import {Helmet} from "react-helmet"
class App extends React.Component {

 mOnWeel =()=> {

 }


  render(){
  return (
    
    <div className="App" onWheel={this.mOnWeel}>
        <Helmet>
        <title>Головна сторінка</title>
        <meta name="description" content="Опис головної сторінки" />
        <meta name="keywords" content="Спорт, спорт-сайт, спотклуб" />
      </Helmet>
      < Navbar key={"navbar"}/>
        <Main key="h"/>
    </div>
  );
}
}
export default App;
