import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface ColorState {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ColorState = {
  value: '#225566',
  status: 'idle',
};


export const colorReducer = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor: (state, newValue) => {
      state.value = newValue.payload;
    },
    resetColor: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { changeColor, resetColor } = colorReducer.actions;
export const selectColor = (state: RootState) => state.color.value;

export default colorReducer.reducer;
