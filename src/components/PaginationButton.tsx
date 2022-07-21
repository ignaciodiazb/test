import React from 'react';

type ButtonProps = {
  children: string;
  handleClick: React.MouseEventHandler;
  isDisabled: boolean;
};

const PaginationButton = ({
  children,
  handleClick,
  isDisabled,
}: ButtonProps) => {
  return (
    <button onClick={handleClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default PaginationButton;
