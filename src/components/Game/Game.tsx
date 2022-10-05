import React, { useState } from 'react';
import 'components/Game/Game.css';
import GameDisplay from '../GameDisplay/GameDisplay';
import NumberPicker from '../NumberPicker/NumberPicker';
import {
  getIndexFilledArray,
  getRandomNumberInRange,
  randomSumIn,
  sumArray,
} from '../../utils/calc';
import { NumberPickStatus } from '../NumberPick/NumberPick';

function Game() {
  const numberOptions = 9;
  const [numberStars, setNumberStars] = useState(getRandomNumberInRange(1, numberOptions));
  const [availableNumbers, setAvailableNumbers] = useState<number[]>(
    getIndexFilledArray(numberOptions),
  );
  const [candidateNumbers, setCandidateNumbers] = useState<number[]>([]);

  const header = 'Star Match Game';
  const helper = 'Pick 1 or more numbers that sum to the number of stars';

  const numberStatus = (numberId: number) => {
    if (sumArray(candidateNumbers) > numberStars && candidateNumbers.includes(numberId)) {
      return NumberPickStatus.WRONG;
    }
    if (candidateNumbers.includes(numberId)) return NumberPickStatus.CANDIDATE;
    if (!availableNumbers.includes(numberId)) return NumberPickStatus.UNAVAILABLE;

    return NumberPickStatus.AVAILABLE;
  };

  const checkCandidateNumbers = (newCandidateNumbers: number[]) => {
    if (sumArray(newCandidateNumbers) !== numberStars) return;

    const newAvailableNumbers = availableNumbers.filter(
      (availableNum) => !newCandidateNumbers.includes(availableNum),
    );

    setAvailableNumbers(newAvailableNumbers);
    setCandidateNumbers([]);
    setNumberStars(randomSumIn(newAvailableNumbers, numberOptions));
  };

  const onPickNumberHandler = (pickedNum: number) => {
    if (!availableNumbers.includes(pickedNum)) return;

    if (candidateNumbers.includes(pickedNum)) {
      setCandidateNumbers((prevCandidateNumbers) =>
        prevCandidateNumbers.filter((candidateNum) => candidateNum !== pickedNum),
      );
      return;
    }

    setCandidateNumbers((prevCandidateNumbers) => [...prevCandidateNumbers, pickedNum]);

    const newCandidateNumbers = [...candidateNumbers, pickedNum];
    checkCandidateNumbers(newCandidateNumbers);
  };

  const isWon = availableNumbers.length === 0;
  const restartGame = () => {
    setAvailableNumbers(getIndexFilledArray(numberOptions));
    setNumberStars(getRandomNumberInRange(1, numberOptions));
    setCandidateNumbers([]);
  };

  return (
    <div className="Game">
      <header className="Game-header">{header}</header>
      <div className="Game-helper">{helper}</div>
      <div className="Game-board">
        <GameDisplay numberStars={numberStars} isWon={isWon} restartGame={restartGame} />
        <NumberPicker
          numberPicks={numberOptions}
          getNumberPickStatus={numberStatus}
          onNumberPick={onPickNumberHandler}
        />
      </div>
    </div>
  );
}

export default Game;
