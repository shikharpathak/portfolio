import React , { Component} from 'react';

class CounterClass extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
    increaseCount(){
        this.setState({
            counter: this.state.counter+1
        })
    }
    render(){
        return (
            <div className="main">
                <h1>Count : {this.state.counter}</h1>
                <h1 onClick={()=>this.increaseCount()}>Increase</h1>
            </div>
        )
    }
}
export default CounterClass