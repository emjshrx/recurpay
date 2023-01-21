import * as React from "react";
import * as JSURL from "jsurl";
import { useSearchParams } from "react-router-dom";

function useQueryParam(key) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramValue = searchParams.get(key);

  const value = React.useMemo(() => JSURL.parse(paramValue), [paramValue]);

  const setValue = React.useCallback(
    (newValue, options) => {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set(key, JSURL.stringify(newValue));
      setSearchParams(newSearchParams, options);
    },
    [key, searchParams, setSearchParams]
  );

  return [value, setValue];
}

export const useRecurpayInteractions = () => {
  const [payment, setPayment] = useQueryParam("payment");

  const [walletButtonText, setWalletButtonText] =
    React.useState("No wallet Found");
  const [walletButtonDisabled, setWalletButtonDisabled] = React.useState(false);
  if (!payment) {
    setPayment({ amount: 0, transactionId: "ERROR" });
  }

  const handleWalletConnect = async () => {
    console.log("Hello")
  };
  return {
    payment,
    walletButtonDisabled,
    walletButtonText,
    handleWalletConnect,
  };
};
