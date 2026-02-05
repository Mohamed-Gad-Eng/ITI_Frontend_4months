import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function ButtonGroups() {

    return (<>
        <ButtonGroup variant="contained" color="secondary" orientation="horizontal" aria-label="Basic button group" sx={{
          boxShadow: 3,
          borderRadius: 2,
          "& .MuiButton-root": {
            paddingX: 3,
            paddingY: 1.5,
            fontWeight: "bold",
          },
        }}>
            <Button>Option 1</Button>
            <Button>Option 2</Button>
            <Button>Option 3</Button>
        </ButtonGroup>
        <hr />
    </>)
}
