// SharedLayout.jsx

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LoadingIndicator } from '../LoadingIndicator';
import { StyledHeader, StyledNavLink } from './NavigationWrapper.styled';

const NavigationWrapper = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>

      <Suspense fallback={<LoadingIndicator />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavigationWrapper;
