import React from 'react';
import * as Fi from 'react-icons/fi';

import './style.css';

const Submenu = () => {
  return <nav className="submenu">
    <SubmenuItem name="Home" icon={<Fi.FiHome/>} />
    <SubmenuItem name="Libraries" icon={<Fi.FiBook/>} />
    <SubmenuItem name="Profile" icon={<Fi.FiUser/>} />
  </nav>;
}

const SubmenuItem = ({ icon, name }) => {

  return <div className="submenu-item">
    <span className="icon">{icon}</span>
    <span className="title">{name}</span>
  </div>

}



export default Submenu;