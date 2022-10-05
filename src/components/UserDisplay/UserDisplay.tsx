import React from 'react';
import 'components/UserDisplay/UserDisplay.css';

export interface UserDisplayProps {
  onClick: () => void;
}

function UserDisplay({ onClick }: UserDisplayProps) {
  const text = 'You WON!!!';
  const buttonText = 'Play Again';
  return (
    <div>
      <div className="text-msg">{text}</div>
      <button className="user-display-btn" type="button" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default UserDisplay;
