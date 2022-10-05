import React from 'react';
import 'components/NumberPicker/NumberPicker.css';
import NumberPick, { NumberPickStatus } from '../NumberPick/NumberPick';
import { getIndexFilledArray } from '../../utils/calc';

export interface NumberPickerProps {
  numberPicks: number;
  getNumberPickStatus: (numberId: number) => NumberPickStatus;
  onNumberPick: (pickedNumber: number) => void;
}

function NumberPicker({ numberPicks, getNumberPickStatus, onNumberPick }: NumberPickerProps) {
  const nums = getIndexFilledArray(numberPicks);

  return (
    <div className="Game-number-picker">
      {nums.map((numId) => (
        <NumberPick
          key={numId}
          numberId={numId}
          status={getNumberPickStatus(numId)}
          onClickHandler={() => onNumberPick(numId)}
        />
      ))}
    </div>
  );
}

export default NumberPicker;
