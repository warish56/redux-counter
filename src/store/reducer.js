
const InitialState={
    counter:0
}


   let incrementCounter = (state) =>{
     return{
         counter: state.counter +1
     }
   }

   let decrementCounter = (state) =>{
    return{
        counter: state.counter -1
    }
   }

   let addCounter = (state,action) =>{
    return{
        counter: state.counter +action.value
    }
   }

   let subCounter = (state,action) =>{
    return{
        counter: state.counter -action.value
    }
   }






const reducer = (state=InitialState, action)=>{


    switch (action.type){
        case 'INCREMENT' :   return incrementCounter(state);
        break;
        case 'DECREMENT' :   return decrementCounter(state);
        break;
        case 'ADD_COUNTER' :   return addCounter(state,action);
        break;
        case 'SUB_COUNTER' :   return subCounter(state,action);
        break;

    }


    return state;
}

export default reducer;