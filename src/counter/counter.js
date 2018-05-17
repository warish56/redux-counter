

import React from 'react'
import {connect} from 'react-redux'

class counter extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.ctr}</p>
                <p onClick={this.props.IncrementCounter}>Click to Increment</p>
                <p onClick={this.props.DecrementCounter}>Click to Decrement</p>
                <p onClick={this.props.addCounter}>Click to ADD</p>
                <p onClick={this.props.subtractCounter}>Click to Subtract</p>


            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        ctr:state.counter
    };
}


 const mapDispatchToProps = dispatch =>{
    return{
        IncrementCounter : () => dispatch({type:'INCREMENT'}),
        DecrementCounter : () => dispatch({type: 'DECREMENT'}),
        addCounter       : () => dispatch({type: 'ADD_COUNTER', value:10}),
        subtractCounter  : () => dispatch({type: 'SUB_COUNTER',value:2}),
    };
 }

export default connect(mapStateToProps,mapDispatchToProps )(counter);