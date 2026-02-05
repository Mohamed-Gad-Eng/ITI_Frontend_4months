import { Avatar, Box, Typography, Stack } from "@mui/material";

export default function ProfileCard() {
  return (
    <>
      <Box
        sx={{
          width: 350,
          padding: 3,
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#fff",
        }}
      >
        <Typography variant="h5" mb={2}>
          User Profile
        </Typography>

        <Stack direction="row" spacing={3} alignItems="center">

          <Avatar
            alt="User Image"
            src="https://i.pravatar.cc/150?img=3"
            variant="circular"
            sx={{ width: 70, height: 70 }}
          />

          <Avatar variant="rounded" sx={{ width: 70, height: 70, bgcolor: "primary.main" }}>
            JS
          </Avatar>

          <Avatar variant="square" sx={{ width: 70, height: 70, bgcolor: "secondary.main" }}>
            AB
          </Avatar>

        </Stack>
      </Box>
      <hr />
    </>
  );
}
