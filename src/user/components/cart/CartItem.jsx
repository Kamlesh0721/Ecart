import React from "react";
import { IconButton, Button } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://picsum.photos/600/400"
            alt="A randomly generated image"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font font-semibold">men slim mid rice black jeans</p>
          <p className="opacity-70">Size-L Black</p>
          <p className="opacity-70 mt-2">Seller</p>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button>remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
