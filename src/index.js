// React 
import React from 'react';
// React DOM 
import ReactDOM from 'react-dom';

// Bootstrap UI
import 'bootstrap/dist/css/bootstrap.min.css';


// Our Components 
import { CardItem, Input, TextArea, Button } from './components';



class App extends React.Component {
  render(){
    return(
      <div className="shadow container-sm bg-danger p-5 mt-5">

        <h2 className="text-center text-white pb-3">To Do List App !</h2>
      
        <hr  width="85%" className="bg-white mb-4" />

        <Input placeholder="tech .."className="form-control mb-3" />

        <TextArea placeholder='desc ..' className="form-control mb-4" rows="3" />

        <Button onClick={() => console.log('clicked 🤳🏻 !')
        } btnTitle='Add' btnStyle="btn btn-dark btn-block" />

        <CardItem index={0} title='React Native' desc='Build Native Cross Platform App <IOS/Android> .. ' />
      
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));