import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderRFC from './components/HeaderRFC';
import BaiTapDanLayout from './components/BaiTapDanLayout/BaiTapDanLayout';
import DataBinding from './DataBinding/DataBinding';
import EventBinding from './DataBinding/EventBinding';
import State from './State/State';
import ExState1 from './State/ExState1';
import ExState2 from './State/ExState2';
import RenderWithMap from './RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      {/* <BaiTapDanLayout/> */}
      {/* <DataBinding /> */}
      {/* <EventBinding/> */}
      {/* <State/> */}
      {/* <ExState1/> */}
      {/* <ExState2/> */}
      <RenderWithMap/>
    </div>
  );
}

export default App;
