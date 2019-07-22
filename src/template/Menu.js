import React, { Component } from 'react'
import MenuItem from './MenuItem';
import MenuTree from './MenuTree';

export default class Menu extends Component {
    render() {
        return (
                 <ul className="sidebar-menu tree" data-widget="tree">
                     <MenuItem path='/dashboard' label='Dashboard' icon='dashboard'></MenuItem>
                     <MenuTree label="Arvore"  icon="edit">
                         <MenuItem path='/dashboard' label="teste" icon="usd"></MenuItem>
                     </MenuTree>
                 </ul>
        )
    }
}
