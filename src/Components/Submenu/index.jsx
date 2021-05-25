import React from 'react';
import * as Fi from 'react-icons/fi';
import { useNavigation } from '../../Contexts/NavigationContext';

import './style.css';

const Submenu = () => {

  const { currentPage } = useNavigation();

  return <nav className="submenu">
    <SubmenuItem name="Home" icon={<Fi.FiHome/>} current={currentPage === 'Home'}/>
    <SubmenuItem name="Libraries" icon={<Fi.FiBook/>} current={currentPage === 'Libraries'}/>
    <SubmenuItem name="Profile" icon={<Fi.FiUser/>} current={currentPage === 'Profile'}/>
  </nav>;
}

const SubmenuItem = ({ icon, name, current }) => {

  return <div className={`submenu-item ${current ? 'enabled' : ''}`}>
    <span className="icon">{icon}</span>
    <span className="title">{name}</span>
  </div>

}



export default Submenu;