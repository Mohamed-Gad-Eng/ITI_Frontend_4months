import Button from '@mui/material/Button';


export default function Buttons() {

    return (<>
        <hr />
        <Button variant="contained">Click Me</Button>
        <hr />
        <Button variant="outlined">Outlined Button</Button>
        <hr />
        <Button variant="text">Click that button</Button>
        <hr />
        <Button
            onClick={() => {
                alert('clicked');
            }}
        >
            Click me
        </Button>
        <hr />
    </>)
}