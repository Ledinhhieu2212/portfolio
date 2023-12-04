import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import publicRoutes from '../services/router';

export default function Header() {
  let [Menu, ShetMenu] = useState(false);
  let menu = '';
  function handlerMenu() {
    if (!Menu) {
      ShetMenu(true);
      menu = 'open';
    } else {
      ShetMenu(false);
      menu = 'close';
    }
  }

  return (
    <header>
      <ul className={`${Menu ? "open" : "close"} `}>
        {publicRoutes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handlerMenu} className={`menu-bar ${Menu ? "open" : "close"} `}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </header>
  );
}
