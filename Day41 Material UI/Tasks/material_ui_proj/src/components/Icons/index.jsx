import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Icons() {
    return (
        <>
            <HomeIcon color="primary" fontSize="large" />
            <hr />
            <FavoriteIcon color="error" />
            <hr />
            <SettingsIcon fontSize='small'/>
            <hr />
        </>
    );
}