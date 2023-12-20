import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      onChange={onChange}
      onKeyPress={handleKeyPress}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={onSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray', // Change border color
          },
          '&:hover fieldset': {
            borderColor: 'darkgray', // Change border color on hover
          },
        },
        '& .MuiInputBase-input': {
          color: 'black', // Change input text color
        },
      }}
    />
  );
};

export default SearchInput;
