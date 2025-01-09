import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function AddressCard({ address, onEdit }) {
  return (
    <Card sx={{ boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Saved Address
        </Typography>
        <Typography variant="body1">
          <strong>Name:</strong> {address.fullName}
        </Typography>
        <Typography variant="body1">
          <strong>Address:</strong> {address.address}
        </Typography>
        <Typography variant="body1">
          <strong>City:</strong> {address.city}
        </Typography>
        <Typography variant="body1">
          <strong>State:</strong> {address.state}
        </Typography>
        <Typography variant="body1">
          <strong>Postal Code:</strong> {address.postalCode}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={onEdit}>
            Edit Address
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
