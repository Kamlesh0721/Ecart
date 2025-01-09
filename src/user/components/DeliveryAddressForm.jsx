import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import AddressCard from "./AddressCard"; // Import the AddressCard component

export default function DeliveryAddressForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const savedAddress = {
    fullName: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Address:", formData);
    // Add form submission logic here
  };

  const handleEditAddress = () => {
    console.log("Edit Address clicked");
    // Add logic for editing the saved address
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        {/* Left Side: Saved Address */}
        <Grid item xs={12} md={6}>
          <AddressCard address={savedAddress} onEdit={handleEditAddress} />
        </Grid>

        {/* Right Side: Address Form */}
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: "background.paper",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Address
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Postal Code"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
