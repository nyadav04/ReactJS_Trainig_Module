import './App.css';
import Add from './components/Add';
import {
  Button,
  Checkbox,
  CssBaseline,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  const [items, setItems] = useState([]);

  const [text, setText] = useState('');

  const [isTextEmpty, setIsTextEmpty] = useState(false);

  const addItem = () => {
    if (text === '') {
      setIsTextEmpty(true);
      return;
    } else {
      setIsTextEmpty(false);
    }
    setItems((prevState) => [...prevState, { text: text, checked: false }]);
  };

  const handleItemCheck = (event, index) => {
    let checked = event.target.checked;
    setItems((prevState) => {
      let prevStateCopy = [...prevState];
      prevStateCopy[index].checked = checked;
      return prevStateCopy;
    });
  };

  const handleItemClear = (index) => {
    setItems((prevState) =>
      prevState.filter((element, elIndex) => elIndex !== index)
    );
  };

  return (
    <div className='App'>
      <CssBaseline />
      <Typography variant='h6' gutterBottom>
        To Do List
      </Typography>
      <Grid
        container
        justifyContent='center'
        alignItems='flex-end'
        spacing={2}
        style={{ marginBottom: '1rem' }}
      >
        <Grid item>
          <Add text={text} setText={setText} isTextEmpty={isTextEmpty} />
        </Grid>
        <Grid item>
          <Button variant='outlined' onClick={addItem}>
            Add
          </Button>
        </Grid>
      </Grid>
      {items &&
        items.map((element, index) => (
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            key={index}
          >
            <Grid item>
              <Typography>{element.text}&emsp;</Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={element.checked}
                onChange={(event) => handleItemCheck(event, index)}
              />
            </Grid>
            <Grid item>
              <IconButton
                aria-label='clear'
                size='small'
                onClick={() => handleItemClear(index)}
              >
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
    </div>
  );
}

export default App;
