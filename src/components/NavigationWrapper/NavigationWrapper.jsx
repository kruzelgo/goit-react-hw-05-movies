import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import PropTypes from 'prop-types';

import css from './NavigationWrapper.css';

const NavigationWrapper = () => {
  return (
    <div className={css.navigationWrapper}>
      <header className={css.header}>
        {' '}
        <nav>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

NavigationWrapper.propTypes = {
  className: PropTypes.string,
};

export default NavigationWrapper;
