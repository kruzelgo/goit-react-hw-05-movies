import React from 'react';
import { CircleLoader } from 'react-spinners/CircleLoader';

const LoadingIndicator = () => {
  return (
    <CircleLoader color="#36d7b7" loading size={100} speedMultiplier={1} />
  );
};

export default LoadingIndicator;
