import { Stack, Typography, Box, Button } from "@mui/material";

export default function ModernSection() {
  return (
    <Box className="py-16">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={6}
        className="max-w-300 mx-auto px-5 items-center"
      >
        <Box className="relative flex-1">

          <div className="flex gap-6">
            <img
              src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
              className="w-[65%] rounded-xl absolute left-0 top-0"
              alt=""
            />

            <img
              src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
              className="w-[35%] rounded-xl shadow-lg ml-auto"
              alt=""
            />
          </div>

          <img
            src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
            className="w-65 rounded-xl shadow-lg absolute left-[50%]"
            alt=""
          />

          <div className="h-95" />
        </Box>

        <Stack flex={1} spacing={3}>
          <Typography variant="h4" fontWeight="bold">
            We Help You Make Modern Interior Design
          </Typography>

          <Typography color="text.secondary">
            Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
            nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
            velit imperdiet dolor tempor tristique.
          </Typography>

          <Stack direction="row" spacing={6}>
            <Stack spacing={1}>
              <Typography>• Donec vitae odio quis nisl</Typography>
              <Typography>• Donec vitae odio quis nisl</Typography>
            </Stack>

            <Stack spacing={1}>
              <Typography>• Donec vitae odio quis nisl</Typography>
              <Typography>• Donec vitae odio quis nisl</Typography>
            </Stack>
          </Stack>

          <Button
            variant="contained"
            className="bg-[#2f2f2f] rounded-full px-8 w-fit"
          >
            Explore
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
