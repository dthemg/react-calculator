import React from "react"
import ReactDOM from "react-dom"
//import PropTypes from "prop-types"


class CalcButton extends React.Component {
    render() {
        return (
            <button onClick = { this.props.onClick }>
                B
            </button>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);

        this.state = {
            currVal: 0,
        }
    }

    onClick() {
        this.setState( state => ({
            currVal: state.currVal + 1,
        }) )
        console.log(this.state.currVal);
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <CalcButton
                    onClick = { this.onClick }
                />
            </div>
        )

    }

}

ReactDOM.render(
    <Calculator/>,
    document.getElementById("root")
)
