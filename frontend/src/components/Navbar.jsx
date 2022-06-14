import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Link href="/" color="inherit">
              Main
            </Link>
            <Link href="/holidays" color="inherit">
              Holidays
            </Link>
            <Link href="/holidays/:id" color="inherit">
              Detail
            </Link>
            <Outlet />
          </Toolbar>
        </AppBar>
      </Box> */}
      <nav>
        <ul>
          <Link to="/">Main</Link>
          <br />
          <Link to="/holidays/">Holidays</Link>
          <br />
          <Link to="/holidays/:id">Detail</Link>
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Navbar;
