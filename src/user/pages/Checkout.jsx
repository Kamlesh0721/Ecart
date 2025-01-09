import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation, useNavigate } from "react-router-dom";

import DeliveryAddressForm from "../components/DeliveryAddressForm";
import OrderSummary from "../components/OrderSummary";
import AddressCard from "../components/AddressCard";

const steps = ["Login", "Add Delivery address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const querySearch = new URLSearchParams(location.search);
  const step = parseInt(querySearch.get("step")) || 0; // Default to step 0 if not present

  const handleNext = () => {
    navigate(`?step=${step + 1}`);
  };

  const handleBack = () => {
    navigate(`?step=${step - 1}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {step === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      ) : (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              pt: 2,
              justifyContent: "space-between",
            }}
          >
            <Button
              color="inherit"
              disabled={step === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button onClick={handleNext}>
              {step === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {step}</Typography>
          {step == 1 ? <DeliveryAddressForm /> : <OrderSummary />}
        </React.Fragment>
      )}
    </Box>
  );
}
