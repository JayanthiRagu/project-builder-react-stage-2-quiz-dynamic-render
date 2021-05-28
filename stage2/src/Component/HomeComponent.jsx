import React, { Component } from 'react';
import './HomeComponent.css';
import QuizComponent from './QuizComponent.jsx';

class HomeComponent extends Component {
    constructor() {
        super();
        this.state = {
            showQuestions: false  
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("Quiz")
        this.setState({
            showQuestions: !this.state.showQuestions
          });
    }

    getComponent() {
        console.log("getComponent");
        if (this.state.showQuestions) { 
            console.log("getComponent1");
          return <QuizComponent/>;
        } else {
            console.log("getComponent2");
          return null;
        }
      }

    render() {
        return (
            <div className="container">
                <h1>Quiz App</h1>
                <button className="buttons" onClick={()=>this.handleClick()}>Play</button>
                {this.getComponent()}
            </div>
        );
    }
}

export default HomeComponent;