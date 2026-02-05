import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingButton() {
  return (
    <Fab
      color="primary"
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        "&:hover": {
          backgroundColor: "green",
        },
      }}
    >
      <AddIcon />
    </Fab>
  );
}
