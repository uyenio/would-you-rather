import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {


    render() {
        return (
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink to='/home' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/add' exact activeClassName='active'>
                                New Question
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/leaderboard' exact activeClassName='active'>
                                Leaderboard
                            </NavLink>
                        </li>
                    </ul>
                    <h3 className='center'>Hello, {this.props.userName}!</h3>
                </nav>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    const userName = users[authedUser].name
    return {
        userName: userName
    }
}


export default connect(mapStateToProps)(Nav)