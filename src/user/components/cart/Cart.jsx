import React from "react";
import CartItem from "./cartItem";
import { Button } from "@mui/material";

function Cart() {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          <CartItem />
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">
              Price Details{" "}
            </p>
            <hr />
            <div className="space-y-3 font-semi-bold">
              <div className="flex justify-between pt-3">
                <span>Price(3 item)</span>
                <span>₹ 4999</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span>- ₹ 2000</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Total Amount</span>
                <span>4999</span>
              </div>
            </div>
          </div>
          <Button variant="contained">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
