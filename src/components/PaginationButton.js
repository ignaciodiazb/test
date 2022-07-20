import React from 'react';

const PaginationButton = ({ children, onClick, isDisabled }) => {
  return (
    <button onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default PaginationButton;
