import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    changeColor,
    resetColor,
    selectColor,

} from './colorReducer';

export function Color() {
  const color = useAppSelector(selectColor);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const newValue = 'red'

  return (
    <div>
      <div>
        Change Colors
        <button
          aria-label="change color"
          onClick={() => dispatch(changeColor(newValue))}
        >
          Change color
        </button>
        <span>{color}</span>

        <button
          aria-label="reset color"
          onClick={() => dispatch(resetColor())}
        >
          Reset color by default
        </button>
        <span>{color}</span>

      </div>
    </div>
  );
}
