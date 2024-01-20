import { NavLink } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "86vh",
      }}
    >
      <Typography
        component={Paper}
        sx={{
          fontSize: 36,
          fontWeight: 500,
          color: "#646cff",
          textAlign: "center",
          padding: 2,
          maxWidth: 500,
          backgroundColor: "transparent",
        }}
      >
        Welcome to Tables App
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: 600,
            color: "colors.grey",
          }}
        ></Typography>
        Choose your table
      </Typography>
      <NavLink to="/accounts">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#646cff",
            outline: "none",
            fontSize: 16,
            width: "222px",
            py: 2,
            "&:hover": {
              backgroundColor: "white",
              color: "colors.grey",
              border: "1px solid transparent",
            },
            "&.active": {
              backgroundColor: "white",
              color: "colors.grey",
              border: "1px solid transparent",
            },
          }}
        >
          Accounts
        </Button>
      </NavLink>
      <NavLink to="/profiles">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#646cff",
            outline: "none",
            fontSize: 16,
            marginTop: 2,
            width: "222px",
            py: 2,
            "&:hover": {
              backgroundColor: "white",
              color: "colors.grey",
              border: "1px solid transparent",
            },
            "&.active": {
              backgroundColor: "white",
              color: "colors.grey",
              border: "1px solid transparent",
            },
          }}
        >
          Profiles
        </Button>
      </NavLink>
      <NavLink to="/campaigns">
        <Button
          color="inherit"
          variant="outlined"
          sx={{
            color: "#646cff",
            outline: "none",
            fontSize: 16,
            marginTop: 2,
            width: "222px",
            py: 2,
            "&:hover": {
              backgroundColor: "white",
              color: "colors.grey",
              border: "1px solid transparent",
            },
            "&.active": {
              backgroundColor: "white",
              color: "colors.grey",
              border: "1px solid transparent",
            },
          }}
        >
          Campaigns
        </Button>
      </NavLink>
    </Box>
  );
};

export default Home;
