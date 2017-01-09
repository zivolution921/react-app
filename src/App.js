import React from 'react';

class App extends React.Component {
  // return DOM representation of the component
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <b>Bold</b>
      </div>
      
      // this is the function that we are returning
      // render React.createElement('h1', null, 'Hello World')
    ) 
  }
}
// can have state
// const App = () => <h1>Hello World</h1>
export default App