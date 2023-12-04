import React from 'react';
import '@assets/scss/header.scss';
import { Link } from 'react-router-dom';
import publicRoutes from '../services/router';

export default function Header() {
  return (
    <header>
      <ul>
        {publicRoutes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
