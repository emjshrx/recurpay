import * as React from "react";
import { useRecurpayInteractions } from "./hooks";

const installments = 6;
const timePeriod = "1 year";

const RecurpayMainPage = () => {
  const {
    payment,
    walletButtonDisabled,
    walletButtonText,
    handleWalletConnect,
  } = useRecurpayInteractions();
  return (
    <div className="h-screen flex items-center justify-center bg-puce">
      <div className="p-6 w-1/4 min-w-max bg-white rounded shadow-lg flex flex-col items-center text-puce">
        <div className="flex justify-between w-full">
          <div className="flex justify-start">
            <div className="text-4xl">R</div>
            <div className="text-5xl text-rose3">e</div>
            <div className="text-4xl">curpay.</div>
          </div>
          <button
            className="bg-rose2 p-3 hover:bg-rose1 disabled:bg-puce disabled:opacity-50 disabled:text-rose1 outline-puce rounded text-sm"
            onClick={() => handleWalletConnect()}
          >
            {walletButtonText}
          </button>
        </div>
        <div className="text-center mt-8">
          <div>You are Paying a total of</div>
          <div className="text-4xl">{`$ ${payment.amount}.00`}</div>
          <div className="text-xs opacity-50">{`Merchant Txn ID : ${payment.transactionId}`}</div>
          <div className="text-xs opacity-50">{`Recurpay Txn ID : ${"asdfghjkl"}`}</div>
          <div className="mt-5">by pledging to pay</div>
          <div className="text-4xl">{`$${payment.amount/installments}`}</div>
          <div className="text-xs opacity-50">{`in ${installments} installments over a period of ${timePeriod}`}</div>
          <button className=" mt-5 bg-rose3 p-3 hover:bg-rose2 text-white hover:text-puce rounded">
            Initaite Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecurpayMainPage;
