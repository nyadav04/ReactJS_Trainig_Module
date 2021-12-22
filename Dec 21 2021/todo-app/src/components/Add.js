import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function Add({ text, setText, isTextEmpty }) {
  return (
    <TextField
      error={isTextEmpty}
      id='standard-basic'
      label='Enter an item'
      variant='standard'
      value={text}
      onChange={(event) => {
        setText(event.target.value);
      }}
      // helperText={isTextEmpty && 'Required'}
    />
  );
}
