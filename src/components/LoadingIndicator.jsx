import React from 'react';
import { MutatingDots } from 'react-spinners';

const LoadingIndicator = () => {
  return (
    <MutatingDots
      visible={true}
      height={100}
      width={100}
      color="#778899"
      secondaryColor="#4fa94d"
      radius={12.5}
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoadingIndicator;
