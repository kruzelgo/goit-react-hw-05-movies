import React, { lazy } from 'react';
import { Router, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/movies/:movieId" component={MovieDetails} />
        <Route path="/movies/:movieId/cast" component={Cast} />
        <Route path="/movies/:movieId/reviews" component={Reviews} />
      </Router>
    </div>
  );
};
