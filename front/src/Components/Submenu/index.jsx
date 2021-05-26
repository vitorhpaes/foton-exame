import React from 'react';
import * as Fi from 'react-icons/fi';
import { useNavigation } from '../../Contexts/NavigationContext';
import { useHistory } from 'react-router-dom';

import './style.css';

const Submenu = () => {

  const { currentPage, showSubmenu } = useNavigation();

  return <nav className={`submenu ${showSubmenu ? "" : "d-none"}`}>
    <SubmenuItem name="Home" icon={<Fi.FiHome/>} current={currentPage === 'Home'} linkTo="/" routeName="Home"/>
    <SubmenuItem name="Add book" icon={<Fi.FiPlus/>} current={currentPage === 'addbook'} linkTo="/addbook" routeName="addbook"/>
    <SubmenuItem name="Profile" icon={<Fi.FiUser/>} current={currentPage === 'Profile'}/>
  </nav>;
  
}

const SubmenuItem = ({ icon, name, current, linkTo, routeName }) => {

  const history = useHistory();
  const { setCurrentPage } = useNavigation();
  const redirect = () => {
    if(!linkTo) return alert('Not disponible yet');
    setCurrentPage(routeName);
    return history.push(linkTo);
  }

  return <div className={`submenu-item ${current ? 'enabled' : ''}`} onClick={redirect}>
    <span className="icon">{icon}</span>
    <span className="title">{name}</span>
  </div>

}



export default Submenu;