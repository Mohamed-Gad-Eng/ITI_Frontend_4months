import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState([false, false]);

  const handleParentChange = (event) => {
    setChecked([event.target.checked, event.target.checked]);
    console.log("Parent checked:", event.target.checked);
  };

  const handleChild1Change = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChild2Change = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div>
      {/* Task 1 & 2 */}
      <FormControlLabel
        label="Accept Terms and Conditions"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleParentChange}
          />
        }
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label="Child 1"
          control={
            <Checkbox checked={checked[0]} onChange={handleChild1Change} />
          }
        />

        <FormControlLabel
          label="Child 2"
          control={
            <Checkbox checked={checked[1]} onChange={handleChild2Change} />
          }
        />
      </Box>
    </div>
  );
}
