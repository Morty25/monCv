import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IconButton } from "@mui/material";

const Nav = ({
  isHeaderPage,
  setIsHeaderPage,
  animateHeader,
  setAnimateHeader,
  timeAnimationHeader,
}) => {
  const toggleHeader = () => {
    setAnimateHeader((e) => !e);
    setTimeout(() => setIsHeaderPage((e) => !e), timeAnimationHeader * 1000);
  };

  return (
    <IconButton
      aria-label="next"
      color="primary"
      disabled={isHeaderPage ? !animateHeader : animateHeader}
      onClick={toggleHeader}
      sx={{
        position: "absolute",
        bottom: isHeaderPage ? "100px" : "none",
        zIndex: 10,
        left: "100px",
        top: !isHeaderPage ? "100px" : "none",
      }}
    >
      {isHeaderPage ? (
        <ArrowDownwardIcon sx={{ fontSize: "80px" }} />
      ) : (
        <ArrowUpwardIcon sx={{ fontSize: "80px" }} />
      )}
    </IconButton>
  );
};

export default Nav;
