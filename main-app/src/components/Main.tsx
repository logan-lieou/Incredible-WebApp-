import React, { Component } from 'react'

type SuperProps = {}

// main class
export class Main extends Component <SuperProps> {
    
    SuperProps:string[] = ["Just Do!", "You Got This!", "Keep Going!", "They'll Be Poor!"]
    state = { data: this.SuperProps[0] };

    getClick() {
        let rand = Math.floor((Math.random()*4) + 0)
        this.setState({ data: this.SuperProps[rand] })
    }

    render () {
        return(
            <div className="text-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="display-1">{this.state.data}</h1>
            <br></br>
            <br></br>
            <br></br>
            <button className="btn btn-lg btn-danger" onClick={this.getClick.bind(this)}>Motivation!</button>
            </div>
        )
    }
}