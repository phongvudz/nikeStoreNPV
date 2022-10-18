import React from "react";
import CartItem from "../Cart/CartItem";
import CartCount from "../Cart/CartCount";
import CartEmpty from "../Cart/CartEmpty";

const Cart = () => {
  return (
    <>
      <div
        className={`fixed  top-0 left-0 right-0 bottom-0 blur-effect-theme z-[200] w-full h-screen opacity-100`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl absolute right-0 w-full`}
        >
          <CartCount />
          <CartEmpty />
          <CartItem />
        </div>
      </div>
    </>
  );
};

export default Cart;
