import React, {useEffect, useReducer} from 'react';

import {testReducer} from "./reducer";
import './index.scss';
import Routes from "./routes";

export const ContextApp = React.createContext()

const App = () => {

  const data = [
    {
      heading: 'Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto corporis facilis hic.'
    },
    {
      heading: 'Heading',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto corporis facilis hic.'
    },
  ]

  const [cards, dispatch] = useReducer(testReducer, data, () => {
    const localData = localStorage.getItem('cards')
    return localData ? JSON.parse(localData) : data
  })

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards))
  }, [cards])

  return (
    <ContextApp.Provider value={{cards, dispatch}}>
      <div className={'app'}>
        <Routes />
      </div>
    </ContextApp.Provider>
  );
}

export default App;
