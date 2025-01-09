import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";

const orderSteps = [
  { label: "Order Placed", date: "Dec 25, 2024" },
  { label: "Processing", date: "Dec 26, 2024" },
  { label: "Shipped", date: "Dec 27, 2024" },
  { label: "Out for Delivery", date: "Dec 28, 2024" },
  { label: "Delivered", date: "Dec 29, 2024" },
];

export default function OrderTracker({ activeStep }) {
  return (
    <Box sx={{ width: "100%", margin: "20px auto" }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Order Tracker
      </Typography>
      <Stepper activeStep={activeStep}>
        {orderSteps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography variant="body1">{step.label}</Typography>
              <Typography variant="caption" sx={{ color: "gray" }}>
                {step.date}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
