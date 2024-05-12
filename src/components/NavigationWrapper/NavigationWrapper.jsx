import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import PropTypes from 'prop-types';

import css from './NavigationWrapper.css';

const NavigationWrapper = () => {
  return (
    <div className={css.navigationWrapper}>
      <header>
        <nav>
          <a href="/" className={css.navLink}>
            Home
          </a>
          <a href="/movies" className={css.navLink}>
            Movies
          </a>
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
