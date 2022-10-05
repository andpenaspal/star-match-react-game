import React from 'react';
import 'components/StarDisplay/StarDisplay.css';

export interface StarDisplayProps {
  numberStars: number;
}

function StarDisplay({ numberStars }: StarDisplayProps) {
  const stars = Array.from({ length: numberStars }, (_, i) => i + 1);

  return (
    <div>
      {stars.map((starId) => (
        <div key={starId} className="star" />
      ))}
    </div>
  );
}

export default StarDisplay;
