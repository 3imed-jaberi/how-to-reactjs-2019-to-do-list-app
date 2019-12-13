// React 
import React from 'react';
// React DOM 
import ReactDOM from 'react-dom';

// Bootstrap UI
import 'bootstrap/dist/css/bootstrap.min.css';


// Our Components 
import { CardItem, Input, TextArea, Button, Alert } from './components';
// Our Static Data
import { DescPlaceholder, BtnTitle, FormTitle, TechPlaceholder, warnMsg } from './constants'; 



// Main Component .. 
class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      currentTechInput: '',
      currentDescInput: '',
      techList: [],
      alert: false
    }
  }


  handleInput(event) {
   // console.log(event.target.value);
   this.setState({ currentTechInput: event.target.value });
  }


  handleTextArea(event) {
    this.setState({ currentDescInput: event.target.value });
  }


  handleClick(event) {
    event.preventDefault();
    //
    // you can add here a logic valdation .. 
    // 
    if ( this.state.currentTechInput !== '' && this.state.currentDescInput !== '' ) {
      const newTech = {
        title: this.state.currentTechInput,
        desc: this.state.currentDescInput
      };
  
      this.setState({ techList: [...this.state.techList, newTech ], currentTechInput: '', currentDescInput: '' },() => console.log(this.state.techList.length));
    }else{
      this.setState({ alert: true});
      setTimeout(() => this.setState({ alert: false}), 3000)
    }
  }


  handleDelete(indexFromChild) {
    let newTechList = this.state.techList.filter( (_,index) => index !== indexFromChild );
    this.setState({ techList: newTechList });
  }



  render(){
    return (
      <div className="shadow container-sm bg-danger p-5 mt-5">

          <h2 className="text-center text-white pb-3">{FormTitle}</h2>
          
          <hr  width="85%" className="bg-white mb-4" />

          <Input value={this.state.currentTechInput} onChange={this.handleInput.bind(this)} placeholder={TechPlaceholder} className="form-control mb-3" />

          <TextArea value={this.state.currentDescInput} onChange={this.handleTextArea.bind(this)} placeholder={DescPlaceholder} className="form-control mb-4" rows="3" />

          <Button onClick={this.handleClick.bind(this)} btnTitle={BtnTitle} btnStyle="btn btn-dark btn-block" />

          {  this.state.alert && <Alert content={warnMsg} /> }


          {/* Handle All Tech List : */}
          {
            this.state.techList.map( (/* item */ { title, desc }, index) => <CardItem onDelete={this.handleDelete.bind(this)} key={'imed'+index+title} index={index} title={title} desc={desc} />  )
          }
          
      </div>
    );
  }
}



// Render The Application .. 
ReactDOM.render(<App />, document.getElementById('root'));
