import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello Buddy'
        }
        // this.changeMsg=this.changeMsg.bind(this) most recommended
    }
    changeMsg(){
        this.setState({
            message:'Not happening buddy'
        })
    }
    // changeMsg = () =>{
    //     this.setState({
    //         message:'Not happening buddy'
    //     })
    // }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMsg()}}>Click me to Change msg</button>
                {/* <button onClick={this.changeMsg()}>Click me to Change msg</button> */}
                {/* <button onClick={this.changeMsg().bind(this)}>Click me to Change msg</button> */}
            </div>
        )
    }
}

export default EventBind
