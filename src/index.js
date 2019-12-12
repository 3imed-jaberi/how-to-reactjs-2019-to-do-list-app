// React 
import React from 'react';
// React DOM 
import ReactDOM from 'react-dom';

// Bootstrap UI
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  render(){
    return(
      <h1> Welcome to ReactJS ! </h1>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));