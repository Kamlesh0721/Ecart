import React from "react";
import AddressCard from "../AddressCard";
import OrderTracker from "./OrderTraker";
import { Grid, Box } from "@mui/material";
import { StarIcon } from "@heroicons/react/24/outline";

function OrderDetail() {
  const savedAddress = {
    fullName: "John Doe",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    postalCode: "10001",
  };
  const handleEditAddress = () => {
    console.log("Edit Address clicked");
    // Add logic for editing the saved address
  };

  return (
    <div>
      <AddressCard address={savedAddress} onEdit={handleEditAddress} />
      <OrderTracker activeStep={0} />

      {[1, 1, 1, 1].map((_, index) => (
        <Grid
          key={index} // Add a unique key for each mapped item
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{
            alignItems: "center", // Fixed typo
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={6}>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Men's slim black jeans"
                className="object-cover object-top w-[5rem] h-[5rem]"
              />
              <div className="mt-2">
                <p className="font-semibold">Men SlimRise Black Jeans</p>
                <p className="text-gray-600">
                  Color: Black <span>Size: M</span>
                </p>
                <p className="text-gray-500">Seller: Asim</p>
                <p className="text-lg font-bold">₹2000</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box
              sx={{
                color: "purple",
                display: "flex",
                alignItems: "center", // Ensure alignment is correct
              }}
            >
              <StarIcon className="h-8 w-8 text-yellow-500 mr-1" />
              <span>Rate & Review</span>
            </Box>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default OrderDetail;
