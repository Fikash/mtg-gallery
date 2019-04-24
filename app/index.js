let React = require('react');
let ReactDOM = require('react-dom');
require('./index.css');

import Frame from './components/Frame.jsx';


class App extends React.Component {
  
  render() {
    return (
      <div>
        Solo Bolo
      </div>
    )
  }
}

ReactDOM.render(
  <Frame/>,
  document.getElementById('app')  
)