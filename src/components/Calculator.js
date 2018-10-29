import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionAddUp, actionAddDown, actionAddMultiply, actionAddDivide } from './../actions'

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.handleMultiply = this.handleMultiply.bind(this)
        this.handleDivide = this.handleDivide.bind(this)
    }

    handleMultiply(e) {
        e.preventDefault()

        let ask = window.prompt('Number:')

        if (parseInt(ask, 10)) {
            this.props.multiply(ask)
        }
    }

    handleDivide(e) {
        e.preventDefault()

        let ask = window.prompt('Number:')

        if (parseInt(ask, 10)) {
            this.props.divide(ask)
        }
    }

    render() {
        return (<div>
            <h1>{this.props.calc || '0'}</h1>

            <button onClick={this.props.add}>
                UP +1
            </button>

            <button onClick={this.props.remove}>
                DOWN -1
            </button>

            <button
                onClick={this.handleMultiply}>
                Multiply by
            </button>

            <button
                onClick={this.handleDivide}>
                Divide by
            </button>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        calc: state.calcApp
    }
}

const mapDispatchToProps = (dispatch) => ({
    add: () => dispatch(actionAddUp()),
    remove: () => dispatch(actionAddDown),
    multiply: number => dispatch(actionAddMultiply(number)),
    divide: number => dispatch(actionAddDivide(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);