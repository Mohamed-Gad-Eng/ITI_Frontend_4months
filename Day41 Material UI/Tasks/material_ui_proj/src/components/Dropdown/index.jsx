import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown() {

    const [framework, setFramework] = React.useState('');

    const handleChange = (event) => {
        setFramework(event.target.value);
    };

    return (
        <>
        <hr />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Framework</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={framework}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"React"}>React</MenuItem>
                    <MenuItem value={"Angular"}>Angular</MenuItem>
                    <MenuItem value={"Vue"}>Vue</MenuItem>
                </Select>
            </FormControl>
            <p>Selected Value: {framework}</p>
        </>
    );
}