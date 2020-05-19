import React, {useContext} from 'react';

import Header from "./Header";
import './index.scss'
import {ContextApp} from "./App";

const Dashboard = () => {

  const {cards} = useContext(ContextApp)

  return (
    <div className={'main'} >
      <Header />
      <div className={'main-dashboard'}>
        {cards.map((v, i) => {
          return (
            <div key={i} className={'main-dashboard__card'}>
              <h2>{v.heading}</h2>
              <p>{v.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Dashboard;