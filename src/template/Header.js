import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
                <header className="main-header">
                    <a href="/#/" className="logo">
                        <span className="logo-mini"><b>T</b> </span>
                        <span className="logo-lg"><b>Teste</b> </span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <a href className="sidebar-toggle" data-toggle="push-menu" role="button">
                             
                        </a>
                    </nav>
                </header>
        )
    }
}
