import React, { Component } from 'react';
import './ResultComponent.css';
import result from '../result.jpg';

class ResultComponent extends Component {
    render() {
        return (
            <div className="container2">
                <div className="img">
                    <img src={result} height="200px" width="200px"></img>
                </div>
                <div className="quiz1">
                    <span>Your Score: 20%</span>
                    <div>
                        <span>Total number of questions:</span>
                        <span>15</span>
                    </div>
                    <div>
                        <span>Number of attempted questions:</span>
                        <span>9</span>
                    </div>
                    <div>
                        <span>Number of correct answers:</span>
                        <span>3</span>
                    </div>
                    <div>
                        <span>Number of wrong answers:</span>
                        <span>6</span>
                    </div>
                </div>
                <div>
                    <button className="button4">Play Again</button>
                    <button className="button5">Back to home screen</button>
                </div>
            </div>
        );
    }
}

export default ResultComponent;