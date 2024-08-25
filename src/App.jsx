import { useReducer} from 'react'
import './App.css'

function App() {
  const [state , dispatch] = useReducer((state , action)=>{
    // console.log(state ,action )
    if(action.type=== "INCREMENT"){
      return state + 1;
    }
    if(action.type === "DECREMENT"){
       return state - 1;
    }
    return state;
  } , 0)
  return (
    <>
       <h1>{state}</h1>
       <button onClick={()=>{dispatch({type: "INCREMENT"})}}>Inc</button>
       <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Dec</button>
    </>
  )
}

export default App
