import React from 'react';

class App extends React.Component {
  // return DOM representation of the component
  render() {
    return <h1>Hello World</h1>
    // render React.createElement('h1', null, 'Hello World')
  }
}
// can have state
// const App = () => <h1>Hello World</h1>
export default App