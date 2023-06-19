import {useContext} from 'react';
import { WeightContext } from './Weight';
export default function Person1() {
    // const weight = useContext(WeightContext)
    // console.log("jigar",weight);
  return (
    <div>
      <h2>Hello this is jigar Prajapati !!</h2>
      <h2>I have total <WeightContext.Consumer>
        {(value)=>value}
      </WeightContext.Consumer> Kg weight</h2>
      <button onClick={()=>{window.location="http://localhost:3000/class"}}>GoToClass</button>
    </div>
  )
}
