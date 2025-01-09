import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
function OrderCard() {
  return (
    <div className="p-5 shadow-md hover:shadow-xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://via.placeholder.com/150" // Sample image URL
              alt="Men's slim jeans in black color" // Descriptive alt text
            />
            <div className="m-5 space-y-2">
              <p>Men slim jeans</p>
              <p className="opacity-50 text-xs font-semibold">Size: M</p>
              <p className="opacity-50 text-xs font-semibold">Color: black</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>R 1099</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sm"
                />
                <span>Delivered on Dec 27</span>
              </p>
              <p> Your item has been delivered</p>
            </div>
          )}
          {true && (
            <p>
              <span>Expected on Dec 27</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard;
