import React, { Component } from 'react'
import Header from '../../template/Header'
import Sidebar from '../../template/Sidebar';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content">
            
          </section>
        </div>
      </div>
    )
  }
}
