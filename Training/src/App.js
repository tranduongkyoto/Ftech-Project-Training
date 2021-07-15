import React from 'react';
// import Counter from './LifeCycle/Counter';
// import RedirectAuth from './router/RedirectAuth';
// import CustomLinkExample from './router/CustomLink';
// import PreventingTransitionsExample from './router/BlockingForm';
// import RecursiveExample from './router/RecursiveExample';
// import SidebarExample from './router/Sidebar';
import {ChatEngine} from 'react-chat-engine';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1
    };
    this.setNumber = this.setNumber.bind(this);
  }
  setNumber(){
    this.setState({number: 10});
  }
  render(){
    return(
      <div className="App">
        {/* <br/>
        <button onClick={this.setNumber}>Change</button>
        <Counter myNumber={this.state.number}></Counter> */}
        {/* <Red /> */}
        {/* <RedirectAuth />
        <CustomLinkExample /> */}
        {/* <PreventingTransitionsExample /> */}
        {/* <RecursiveExample /> */}
        {/* <SidebarExample /> */}
        <ChatEngine
          height='100vh'
          userName='Admin'
          userSecret='admin123'
          projectID='1212fda6-ccce-4827-b718-2102c3a86374'
        />
      </div>
    )
  }
}

export default App;
