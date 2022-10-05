import React from 'react';

export enum NumberPickStatus {
  AVAILABLE = 'AVAILABLE',
  CANDIDATE = 'CANDIDATE',
  UNAVAILABLE = 'UNAVAILABLE',
  WRONG = 'WRONG',
}

enum NumberPickStatusColor {
  AVAILABLE = 'lightgray',
  CANDIDATE = 'deepskyblue',
  UNAVAILABLE = 'lightgreen',
  WRONG = 'lightcoral',
}

export interface NumberPickProps {
  numberId: number;
  status: NumberPickStatus;
  onClickHandler: (numberId: number) => void;
}

function NumberPick({ numberId, status, onClickHandler }: NumberPickProps) {
  return (
    <button
      type="button"
      key={numberId}
      className="Number-pick"
      style={{ backgroundColor: NumberPickStatusColor[status] }}
      onClick={() => onClickHandler(numberId)}
    >
      {numberId}
    </button>
  );
}

export default NumberPick;
