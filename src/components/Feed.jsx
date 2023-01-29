import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="Copyright"
          variant="body2"
          sx={{ color: "#fff", mt: 1.5 }}
        >
          Copyright 2023 Chhetri Media
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
