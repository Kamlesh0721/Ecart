import React from "react";

import { Link } from "react-router-dom";
import { Grid2, Box, Typography } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box marginTop={2} sx={{ backgroundColor: "#f5f5f5", padding: "20px 0" }}>
        <Grid2 container spacing={4} justifyContent="center">
          {/* Column 1 */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are committed to providing the best shopping experience for our
              customers.
            </Typography>
          </Grid2>

          {/* Column 2 */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link to="/" style={{ textDecoration: "none" }}>
                <Typography variant="body2" color="primary">
                  Home
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to="/shop" style={{ textDecoration: "none" }}>
                <Typography variant="body2" color="primary">
                  Shop
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <Typography variant="body2" color="primary">
                  Contact Us
                </Typography>
              </Link>
            </Box>
          </Grid2>

          {/* Column 3 */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: support@example.com</Typography>
            <Typography variant="body2">Phone: +123 456 7890</Typography>
            <Typography variant="body2">
              Address: 123 Main Street, City, Country
            </Typography>
          </Grid2>

          {/* Column 4 */}
          <Grid2 xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link
                to="https://facebook.com"
                style={{ textDecoration: "none" }}
              >
                <Typography variant="body2" color="primary">
                  Facebook
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link to="https://twitter.com" style={{ textDecoration: "none" }}>
                <Typography variant="body2" color="primary">
                  Twitter
                </Typography>
              </Link>
            </Box>
            <Box>
              <Link
                to="https://instagram.com"
                style={{ textDecoration: "none" }}
              >
                <Typography variant="body2" color="primary">
                  Instagram
                </Typography>
              </Link>
            </Box>
          </Grid2>
        </Grid2>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", marginTop: "20px" }}>
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Website. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}

export default Footer;
