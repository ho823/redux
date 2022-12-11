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

  const [pickColor, setPickColor] = useState('#225566');
  const newValue = String(pickColor) || '#225566';


  return (
    <div>
      <p>Color pick</p>
      <div>
        <input type="color" id="head" name="head"
          value={pickColor} onChange={e => setPickColor(e.target.value)} />
      </div>

      <span>color: {color} <br></br> pick color: {pickColor}</span>
      <div>
        Change Colors
        <button
          aria-label="change color"
          onClick={() => dispatch(changeColor(newValue))}
        >
          Change color
        </button>

        <button
          aria-label="reset color"
          onClick={() => dispatch(resetColor())}
        >
          Reset color by default
        </button>

      </div>
    </div>
  );
}
