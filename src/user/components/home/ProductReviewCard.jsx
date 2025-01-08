import React from "react";
import { Rating, Grid2, Box, Avatar } from "@mui/material";
function ProductReviewCard() {
  return (
    <div>
      <div className="space-y-5 py-2">
        <Grid2 container spacing={2} gap={3}>
          <Grid2 item xs={1}>
            <Box>
              <Avatar
                className="text-white"
                sx={{ width: 56, height: 56, bgcolor: "rose" }}
              >
                R
              </Avatar>
            </Box>
          </Grid2>
          <Grid2 item xs={9}>
            <div className="space-y-2">
              <p>Ram</p>
              <p>Dec 5, 2024</p>
            </div>
            <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
            <p>Nice Produce, I love this shirt</p>
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
}

export default ProductReviewCard;
