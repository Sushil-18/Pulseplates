import React, { useContext } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import UserProgressContext from "../context/UserProgressContext";
import useHttp from "../hooks/useHttp";
import CartContext from "../context/CartContext";

const requestConifg = {
  method: "POST",
  headers: {
    "Content-Type": "applicaiton/json",
  },
};

const Checkout = () => {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const {
    Data,
    isLoading: isSending,
    error,
    sendRequest,
  } = useHttp("http://localhost:3000/orders", requestConifg);

  function handleClose() {
    userProgressCtx.hideCheckOut();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    const order = {
      items: cartCtx.items,
      customer: customerData,
    };

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
    console.log(order);
  }

  let actions = (
    <>
      <button type="button" onClick={handleClose}>
        {" "}
        Close
      </button>
      <button className="border-0 bg-yellow-500 p-1 rounded-md">Submit</button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form
        className=" flex flex-col p-3 gap-3 bg-yellow-50"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center font-semibold text-xl">Checkout</h2>
        <Input
          label="Full Name"
          type="text"
          id="name"
          placeholder="Full-Name"
        />
        <Input
          label="E-mail"
          type="email"
          id="email"
          placeholder="E-mail Address"
        />
        <Input
          label="Street"
          type="text"
          id="street"
          placeholder="Street Name"
        />
        <div className="flex flex-row gap-0">
          <Input
            label="Pin Code"
            type="text"
            id="pincode"
            placeholder="Pin Code"
          />
          <Input label="City" type="text" id="city" placeholder="City" />
        </div>
        <div className="flex justify-end gap-4">{actions}</div>
      </form>
    </Modal>
  );
};

export default Checkout;
