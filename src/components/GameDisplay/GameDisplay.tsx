import React from 'react';
import UserDisplay from '../UserDisplay/UserDisplay';
import 'components/GameDisplay/GameDisplay.css';
import StarDisplay from '../StarDisplay/StarDisplay';

export interface GameDisplayProps {
  numberStars: number;
  isWon: boolean;
  restartGame: () => void;
}

function GameDisplay({ numberStars, isWon, restartGame }: GameDisplayProps) {
  return (
    <div className="Game-display">
      {isWon ? <UserDisplay onClick={restartGame} /> : <StarDisplay numberStars={numberStars} />}
    </div>
  );
}

export default GameDisplay;
