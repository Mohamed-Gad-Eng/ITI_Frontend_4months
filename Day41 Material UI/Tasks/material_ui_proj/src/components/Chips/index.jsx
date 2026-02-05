import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';

export default function Chips() {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    return (<>
        <Chip label="Basic Chip" color="success" />
        <hr />
        <Chip label="Click me" color='primary' variant="outlined" onClick={handleClick} />
        <hr />
        <Chip label="Deletable" color='error' onDelete={handleDelete} />
        <hr />
        <Chip
            avatar={<Avatar alt="Natacha" src="https://i.pravatar.cc/150?img=3" />}
            label="Avatar"
            variant="outlined"
        />
    </>)
}
