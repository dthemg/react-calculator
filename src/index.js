import React from "react"
import ReactDOM from "react-dom"

import './style.css'

class CalcButton extends React.Component {
    render() {
        return (
            <button onClick = { this.props.onClick }>
                { this.props.text }
            </button>
        )
    }
}

class CalcNumber extends React.Component {

    render() {
        return (
            <button onClick = { this.props.onClick }>
                { this.props.number }
            </button>
        )
    }
}

class CalcDisplay extends React.Component {
    render() {
        return (
            <p>
                {this.props.displayValue}
            </p>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.onClickEquals = this.onClickEquals.bind(this);

        this.state = {
            num1: "0",
            num2: "0", 
            newInput: true,
            operator: "+",
            afterEquals: false,
        }
    }

    onClickCalcButton(newOperator) {
        this.setState( state => ({
            operator: newOperator,
            newInput: true,
            afterEquals: false,
        }))
    }

    onClickEquals() {
        let res;
        let num1 = parseInt(this.state.num1);
        let num2 = parseInt(this.state.num2);
        switch(this.state.operator) {
            case "x":
                res = num2 * num1;
                break;
            case "/":
                res = num2 / num1;
                break;
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num2 - num1;    
                break;
            default:
                res = 0;
        }
        this.setState({
            num1: res.toString(),
            afterEquals: true,
        })
    }

    numberClicked(number) {
        let newNum1 = this.state.num1;
        let newNum2 = this.state.num2;
        if (this.state.afterEquals) {
            newNum2 = "0";
            newNum1 = number.toString();
        } else if (this.state.newInput) {
            newNum2 = newNum1;
            newNum1 = number.toString();
        } else {
            newNum1 = parseInt(newNum1.toString() + number.toString());
        }
        this.setState({
            num1: newNum1,
            num2: newNum2,
            newInput: false,
            afterEquals: false,
        })
        
    }

    render() {
        return (
            <div>
                <div>
                    <CalcDisplay
                        displayValue = { this.state.num1 }
                    />
                </div>
                <div>
                    <CalcButton
                        onClick = { () => this.onClickCalcButton("x") }
                        text = { "x" }
                    />
                    <CalcButton
                        onClick = { () => this.onClickCalcButton("/") }
                        text = { "/" }
                    />
                    <CalcButton
                    onClick = { this.onClickEquals }
                    text = { "=" }
                    />
                </div>
                <div>
                    <CalcNumber
                        onClick = { () => this.numberClicked(1) }
                        number = { 1 }
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(2) }
                        number = { 2 }
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(3) }
                        number = { 3 }
                    />
                </div>
                <div>
                    <CalcNumber
                        onClick = { () => this.numberClicked(4) }
                        number = { 4 }
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(5) }
                        number = { 5 }
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(6) }
                        number = { 6 }
                    />
                <div>
                </div>
                    <CalcNumber
                        onClick = { () => this.numberClicked(7) }
                        number = { 7}
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(8) }
                        number = { 8 }
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(9) }
                        number = { 9 }
                    />
                <div>
                </div>
                    <CalcButton
                        onClick = { () => this.onClickCalcButton("+") }
                        text = { "+" }
                    />
                    <CalcNumber
                        onClick = { () => this.numberClicked(0) }
                        number = { 0 }
                    />
                    <CalcButton
                        onClick = { () => this.onClickCalcButton("-") }
                        text = { "-" }
                    />
                </div>
            </div>
        )
    }

}

ReactDOM.render(
    <Calculator/>,
    document.getElementById("root")
)
