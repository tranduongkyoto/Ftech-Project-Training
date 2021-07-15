import React, { Component } from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor")
    }
    componentDidMount() {
        console.log("componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}