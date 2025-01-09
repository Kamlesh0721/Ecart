import React from "react";
import { Grid } from "@mui/material";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "Pending", value: "pending" },
  { label: "Processing", value: "processing" },
  { label: "Shipped", value: "shipped" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];

function Order() {
  return (
    <div>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shodow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">Order Status</h1>
              {orderStatus.map((status) => (
                <div key={status.value} className="flex items-center space-x-2">
                  <input
                    id={status.value} // Ensure the input is linked to the label
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    type="checkbox"
                    value={status.value} // Use value to ensure correct binding
                  />
                  <label htmlFor={status.value} className="text-gray-700">
                    {status.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1].map(() => (
              <OrderCard />
            ))}
            ;
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Order;
