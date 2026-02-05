import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';


export default function Ratings() {
    const [value, setValue] = React.useState(2);

    return (
        <>
        <hr />
            <Typography component="legend">Uncontrolled</Typography>
            <Rating
                name="simple-uncontrolled"
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                defaultValue={2}
                precision={0.5}
            />
            <p>Selected Rating: {value}</p>
        </>
    );
}

