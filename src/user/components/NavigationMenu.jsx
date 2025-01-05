import React from "react";
import { AppBar, Toolbar, Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Import NavbarStyles
import { NavbarStyles } from "../../styles/NavbarStyles";

// Icons
import HouseIcon from "@mui/icons-material/House";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

function NavigationMenu() {
  return (
    <AppBar
      position="relative"
      sx={{
        background: "#213555",
        color: "white",
        height: "64px", // Fixed navbar height
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px", // Override default height
          padding: "0 16px", // Adjust padding
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section: Navigation Links */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Box component={Link} to="/home" sx={NavbarStyles.container}>
            <HouseIcon sx={NavbarStyles.icon} />
            <Typography variant="h6" sx={NavbarStyles.text}>
              Home
            </Typography>
          </Box>
          <Link to="/men">
            <Typography variant="h6" sx={NavbarStyles.text}>
              Men
            </Typography>
          </Link>
          <Link to="/women">
            <Typography variant="h6" sx={NavbarStyles.text}>
              Women
            </Typography>
          </Link>
          <Link to="/kids">
            <Typography variant="h6" sx={NavbarStyles.text}>
              Kids
            </Typography>
          </Link>
          <Link to="/beauty">
            <Typography variant="h6" sx={NavbarStyles.text}>
              Beauty
            </Typography>
          </Link>
        </Stack>

        {/* Right Section: Search Bar and Actions */}
        <Box display="flex" alignItems="center" gap={3}>
          {/* Search Section */}
          <Stack
            direction="row"
            alignItems="center"
            sx={NavbarStyles.search_container}
          >
            <SearchIcon sx={NavbarStyles.search_icon} />
            <input
              type="text"
              placeholder="Search..."
              style={NavbarStyles.search_input}
            />
          </Stack>

          {/* Action Section */}
          <Stack direction="row" spacing={3}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              component={Link}
              to="/cart"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <ShoppingCartIcon sx={NavbarStyles.icon} />
              <Typography variant="h6" sx={NavbarStyles.action_text}>
                Cart
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              component={Link}
              to="/profile"
              sx={{ textDecoration: "none", color: "inherit" }}
            >
              <PersonIcon sx={NavbarStyles.icon} />
              <Typography variant="h6" sx={NavbarStyles.action_text}>
                Profile
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationMenu;
