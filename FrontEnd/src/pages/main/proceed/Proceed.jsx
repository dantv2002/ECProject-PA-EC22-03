import React, { useState } from "react";
import { HeaderOnlyLogo } from "../../../components/header/HeaderOnlyLogo";
import { ProceedStep } from "../../../components/proceedstep/ProceedStep";
import { CartDetail } from "./../../../components/cartdetail/CartDetail";
import { Button, message, Steps } from "antd";
import { useSelector } from "react-redux";
import { PaymentAddress } from "../../../components/paymentAddress/PaymentAddress";




const steps = [
  {
    title: "Cart",
    content: <CartDetail />,
  },
  {
    title: "Delivery Address",
    content: <PaymentAddress/>,
  },
  {
    title: "Payment & Confirm",
    content: "Last-content",
  },
];

export const Proceed = () => {
  const [current, setCurrent] = useState(0);

  const {totalPayment} = useSelector(store => store.cart)

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div>
      <HeaderOnlyLogo />

      <div className="proceed-container">
        <ProceedStep current={current} setCurrent={setCurrent} steps={steps} />


        <div className="final-total">
          <span>Total Payment:</span>
          <span className="total-number">{totalPayment.toLocaleString()} VND</span>
        </div>

        <div className="steps-action">
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className="primary-button" disabled={totalPayment > 0 ? false : true} type="primary" onClick={() => next()}>
              Next
            </Button>
          )}

          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
