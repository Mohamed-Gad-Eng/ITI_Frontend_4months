import { Stack, Typography, Box } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReplayIcon from "@mui/icons-material/Replay";

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        sx={{ maxWidth: 1200, mx: "auto", px: 2 }}
        alignItems="center"
      >
        {/* Left */}
        <Stack spacing={4} flex={1}>
          <Stack spacing={2}>
            <Typography variant="h4" fontWeight="bold">
              Why Choose Us
            </Typography>
            <Typography color="text.secondary">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
              Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>
          </Stack>

          <Stack spacing={4}>
            {/* first row */}
            <Stack direction="row" spacing={4}>
              <Stack spacing={1}>
                <LocalShippingIcon fontSize="large" />
                <Typography fontWeight="bold">Fast & Free Shipping</Typography>
                <Typography color="text.secondary" fontSize="14px">
                  Donec vitae odio quis nisl dapibus malesuada.
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <ShoppingBagIcon fontSize="large" />
                <Typography fontWeight="bold">Easy to Shop</Typography>
                <Typography color="text.secondary" fontSize="14px">
                  Donec vitae odio quis nisl dapibus malesuada.
                </Typography>
              </Stack>
            </Stack>

            {/* second row */}
            <Stack direction="row" spacing={4}>
              <Stack spacing={1}>
                <SupportAgentIcon fontSize="large" />
                <Typography fontWeight="bold">24/7 Support</Typography>
                <Typography color="text.secondary" fontSize="14px">
                  Donec vitae odio quis nisl dapibus malesuada.
                </Typography>
              </Stack>

              <Stack spacing={1}>
                <ReplayIcon fontSize="large" />
                <Typography fontWeight="bold">Hassle Free Returns</Typography>
                <Typography color="text.secondary" fontSize="14px">
                  Donec vitae odio quis nisl dapibus malesuada.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {/* Right */}
        <Box flex={1}>
          <img
            src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
            alt="Interior"
            style={{
              width: "100%",
              borderRadius: "20px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
