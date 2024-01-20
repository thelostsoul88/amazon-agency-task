import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: "#646cff",
      }}
    >
      <Toolbar
        sx={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{
            textTransform: "uppercase",
            fontSize: 28,
            fontWeight: 300,
            textAlign: "center",
            color: "black",
          }}
        >
          <NavLink to="/">Tables App</NavLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
