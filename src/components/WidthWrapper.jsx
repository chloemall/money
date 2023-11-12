import React from 'react';

const WidthWrapper = ({ children }) => {
  const wrapperStyle = {
    width: '100%', // Adjust the width as per your design
    margin: '0 auto', // Center the wrapper horizontally
    padding: '20px', // Add padding to the wrapper
    // Add any other styles as needed

    // Responsive styles
    '@media (max-width: 768px)': {
      width: '100%', // Adjust for smaller screens
    },
    '@media (max-width: 480px)': {
      width: '100%', // Adjust for even smaller screens
    },
  };

  return (
    <div className='wrapperStyle' >
      {children}
    </div>
  );
};

export default WidthWrapper;
