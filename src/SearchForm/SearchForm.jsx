import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      notifyError('Please enter something');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  const notifyError = message => {
    NotificationManager.error(message);
  };

  return (
    <>
      <NotificationContainer />
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          placeholder="Search movies"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className={css.searchInput}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default SearchForm;
