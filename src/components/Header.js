import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionLogin, actionLogout } from './../actions'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: ''
        }

        this.handleAuth = this.handleAuth.bind(this)
    }

    validateInput(input, id) {
        if (!input) {
            window.alert('No input: ' + id)
        }

        if (input.length < 5) {
            window.alert('Minimum characters - 5: ' + id)
        }

        if (input.length > 15) {
            window.alert('Maxmimum characters - 15: ' + id)
        }
    }

    handleAuth() {
        let u = window.prompt('Username:')
        let p = window.prompt('Password:')

        if (u && p) {
            this.setState({
                username: u,
                password: p
            }, () => {
                this.props.login({ username: u, password: p })
            })
        } else {
            this.validateInput(u, 'username')
            this.validateInput(p, 'password')
        }
    }

    render() {
        return (<nav className="navbar navbar-light" style={{ 'backgroundColor': '#e3f2fd' }}>
            {this.props.auth.status === 0?
            <button
                className="btn btn-primary"
                onClick={this.handleAuth}>
                Login
            </button>
            :
            <div>
                <h4>Hello, {this.props.auth.username}</h4>
                <span>{this.props.auth.level === '1'? 'admin' : 'normal user'}</span>
                <button
                    className="btn btn-dark"
                    onClick={this.props.logout}>
                    Logout
                </button>
            </div>
            }
        </nav>)
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.loginApp
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch(actionLogin(data)),
    logout: () => dispatch(actionLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);