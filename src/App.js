import React from 'react';

class App extends React.Component {
  // return DOM representation of the component
  // passed values and managed by the components
  constructor() {
    // this will get the component
    super();
    this.state = {
      stateTxt: 'this is the state txt',
      cat: 0
    }
  }
  update(e) {
    this.setState({txt: e.target.value})
  }
  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>Hello World!!!</h1>
        <b>Bold</b>
        <h1>{txt}</h1>
        <input type="text" 
        onChange={this.update.bind(this)}/>
        <h2>{this.state.stateTxt} - {this.state.cat}</h2>
      </div>
      
      // this is the function that we are returning
      // render React.createElement('h1', null, 'Hello World')
    ) 
  }
}
// can have state
// const App = () => <h1>Hello World</h1>
// the type of value that we are looking for
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

//Default proprties
// App.defualt.Props = {
//   txt: "This is the default txt"
// }
export default App