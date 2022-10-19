import React, { useEffect } from "react";
import CartItem from "../Cart/CartItem";
import CartCount from "../Cart/CartCount";
import CartEmpty from "../Cart/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  setCloseCart,
  selectCartState,
  selectCartItems,
  setClearCartItem,
  selectTotalAmount,
  selectTotalQTY,
  setGetTotals,
} from "../app/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const cartItems = useSelector(selectCartItems);
  const TotalPrice = useSelector(selectTotalAmount);
  const TotalQuantity = useSelector(selectTotalQTY);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onClearCartItems = () => {
    dispatch(setClearCartItem());
  };

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };
  return (
    <>
      <div
        className={`fixed  top-0 left-0 right-0 bottom-0 blur-effect-theme z-[200] w-full h-screen opacity-100 ${
          ifCartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={`blur-effect-theme h-screen max-w-xl absolute right-0 w-full`}
        >
          <CartCount
            onCartToggle={onCartToggle}
            TotalQuantity={TotalQuantity}
            onClearCartItems={onClearCartItems}
          />
          {cartItems.length === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll scrollbar-hide h-[85vh] scroll-smooth">
                {cartItems?.map((item, i) => (
                  <CartItem item={item} key={i} />
                ))}
              </div>
              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex justify-between items-center">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-sm rounded bg-theme-cart px-1 py-0.5 text-slate-100">
                    ${TotalPrice}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calculate At Shipping
                  </p>
                  <button
                    type="button"
                    className="button-theme bg-theme-cart text-white "
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
