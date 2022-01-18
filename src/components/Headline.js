import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Headline.module.css';

const Headline = () => (
  <div>
    <header className={classes.header}>
      <nav>
        <h2>BOOKSTORE CMS</h2>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Headline;
