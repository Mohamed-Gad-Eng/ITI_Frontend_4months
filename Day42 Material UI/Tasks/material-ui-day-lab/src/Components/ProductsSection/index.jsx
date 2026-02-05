import { Stack, Typography, Chip, Box } from "@mui/material";

export default function ProductsSection() {
  return (
    <Box sx={{ py: 6 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: "auto", px: 2 }}
      >
        {/* Left */}
        <Stack spacing={2} maxWidth={350}>
          <Typography variant="h4" fontWeight="bold">
            Crafted with excellent material.
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
            Aliquam vulputate velit imperdiet dolor tempor tristique.
          </Typography>

          <Chip label="Explore" color="warning" clickable sx={{ width: "fit-content" }} />
        </Stack>

        {/* Right */}
        <Stack direction="row" spacing={4} textAlign="center">
          
          <Stack spacing={1}>
            <img
              src="https://themewagon.github.io/furni/images/product-1.png"
              width="140"
            />
            <Typography fontWeight="bold">Nordic Chair</Typography>
            <Typography color="text.secondary">$50.00</Typography>
          </Stack>

          <Stack spacing={1}>
            <img
              src="https://themewagon.github.io/furni/images/product-2.png"
              width="140"
            />
            <Typography fontWeight="bold">Kruzo Aero Chair</Typography>
            <Typography color="text.secondary">$78.00</Typography>
          </Stack>

          <Stack spacing={1}>
            <img
              src="https://themewagon.github.io/furni/images/product-3.png"
              width="140"
            />
            <Typography fontWeight="bold">Ergonomic Chair</Typography>
            <Typography color="text.secondary">$43.00</Typography>
          </Stack>

        </Stack>
      </Stack>
    </Box>
  );
}
