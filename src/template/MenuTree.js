import React, { Component } from 'react'

export default class MenuTree extends Component {
    render() {
        return (
                <li className="treeview">
                    <a href={this.props.path}> 
                        <i className={`fa fa-${this.props.icon}`} /> 
                        <span>{this.props.label}</span>
                        <i className='fa fa-angle-left pull-right' />
                    </a>
                    <ul className='treeview-menu'> 
                        {this.props.children}
                    </ul>
                </li>        
            
        )
    }
}
