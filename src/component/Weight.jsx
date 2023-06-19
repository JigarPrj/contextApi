import * as React from 'react';
const WeightContext = React.createContext()
function WeightState({children}) {
    const [weight,setweight]=React.useState('75') 
    
  return (
      <WeightContext.Provider value={'75'}>
        {children}
      </WeightContext.Provider>
  )
}
export {WeightState,WeightContext}
