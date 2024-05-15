export const LoadingIndicator = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  };

  const spinnerStyle = {
    border: '12px solid #f3f3f3',
    borderTop: '12px solid #3498db',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    animation: 'spin 2s linear infinite',
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
    </div>
  );
};

export default LoadingIndicator;
