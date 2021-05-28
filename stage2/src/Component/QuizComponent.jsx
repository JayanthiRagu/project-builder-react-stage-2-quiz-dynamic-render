import React, { Component } from 'react';
import './QuizComponent.css'
import questions from '../resources/questions.json';
import ResultComponent from './ResultComponent.jsx';

class QuizComponent extends Component {
    constructor(){
        super();
        this.state={
            question_no:0,
            showResultPage:false
        }
    }

    //previous button for question
    previousbutton(){
        var curr_ques=this.state.question_no;
        this.setState({question_no:curr_ques-1});
    }

    nextbutton(){
        var curr_ques=this.state.question_no;
        this.setState({question_no:curr_ques+1});
    }

    quitbutton() {
        console.log("Quitbutton")
        this.setState({
            showResultPage: !this.state.showResultPage
          });
    }

    getComponent() {
        console.log(this.state.showResultPage);
        if (this.state.showResultPage) { 
          return <ResultComponent/>;
        } else {
          return null;
        }
      }

    render() {
        return (
            <div className="container1">
                <div className="quiz">
                    <span className="title">Questions</span>
                    <div className="question">
                        <span className="outof">4 out of 15</span>
                        <span>What is your name</span>
                    </div>
                    <div>
                        <button className="button">Option A</button>
                        <button className="button">Option B</button>
                    </div>
                    <div>
                        <button className="button">Option C</button>
                        <button className="button">Option D</button>
                    </div>
                    <div>
                        <button className="button1" onClick={()=>this.previousbutton()}>Previous</button>
                        <button className="button2" onClick={()=>this.nextbutton()}>Next</button>
                        <button className="button3"onClick={()=>this.quitbutton()}>Quit</button>
                    </div>
                </div>
                {this.getComponent()}
            </div>
        );
    }
}

export default QuizComponent;