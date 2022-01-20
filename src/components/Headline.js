import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';
import classes from './Headline.module.css';

const Headline = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <h2>BOOKSTORE CMS</h2>
          {
            links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                style={({ isActive }) => ({
                  opacity: isActive ? '1' : '0.5',
                })}
              >
                {link.text}
              </NavLink>
            ))
          }
        </nav>
        <div className={classes.header}>
          <ImUser />
        </div>
      </header>
    </div>
  );
};

export default Headline;
