import React, { Component } from 'react';

// tao Context Provider
const AppContext = React.createContext();

//wrapper component: context provider component
class AppProvider extends Component {
    state={
        number: 10,
        inc: ()=>{
            this.setState({
                number: this.state.number+1
            })
        }
    }
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

const Green= ()=>(
    <div color="green">

        {/* dung context.number trong Consumer de lay gia tri */}
        <AppContext.Consumer>
            {(context)=>{
                console.log(context);
                return context.number;
            }}
        </AppContext.Consumer>
    </div>
)

const Blue=()=>(
    <div color="blue">
        <AppContext.Consumer>
            {(context)=>(
                <button onClick={context.inc}>INC</button>
            )}
        </AppContext.Consumer>
        <Green />
    </div>
)

export default class Red extends Component{
    render(){
        return (
            <div>
                <AppProvider>
                <div color="red">

                   {/* dung context.number trong Consumer de lay gia tri */}
                    <AppContext.Consumer>
                        {(context)=>context.number}
                    </AppContext.Consumer>
                </div>
                <Blue />
            </AppProvider>
            </div>
        )
    }
}