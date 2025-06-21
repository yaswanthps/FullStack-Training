let initialValue=0

const counter=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset":
            return initialValue
        default:
            return state
    }
}
const Reducer = () => { 
    const [count,dispatch]=React.useReducer(counter,initialValue)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}
export default Reducer