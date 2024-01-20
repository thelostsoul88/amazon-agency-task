import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: "#646cff",
        position: "sticky",
        bottom: 0,
        left: 0,
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
          component="a"
          href="https://github.com/thelostsoul88"
          sx={{
            fontSize: 14,
            fontWeight: 300,
            textAlign: "center",
            color: "black",
          }}
        >
          Powered by thelostsoul88
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
