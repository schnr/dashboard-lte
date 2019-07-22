import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MenuItem extends Component {
    render() {
        return (
                <li>
                    <Link to={this.props.path}>
                        <i className={`fa fa-${this.props.icon}`}></i><span>
                            {this.props.label}
                        </span>
                    </Link>
                </li>
        )
    }
}
