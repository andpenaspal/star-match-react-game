import React from 'react';
import 'components/GameDisplay/GameDisplay.css';

export interface GameDisplayProps {
  numberStars: number;
}

function GameDisplay({ numberStars }: GameDisplayProps) {
  const stars = Array.from({ length: numberStars }, (_, i) => i + 1);

  return (
    <div className="Game-display">
      {stars.map((starId) => (
        <div key={starId} className="star" />
      ))}
    </div>
  );
}

export default GameDisplay;
