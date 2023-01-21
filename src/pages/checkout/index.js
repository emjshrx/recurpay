import * as React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const txnAmount = "699.00";
  const navigate = useNavigate();
  function handleClick() {
    const txnId = "qwertyuiop1234567890";
    navigate(
      `/main?payment=~%28amount~${txnAmount}~transactionId~%27${txnId}%29`
    );
  }
  const [paymentOption, setPaymentOption] = React.useState("");
  const getButtonText = () => {
    if (paymentOption === "") {
      return "Choose Payment";
    }
    return paymentOption !== "Recurpay"
      ? "You have chosen ... Poorly"
      : "Proceed to Pay";
  };
  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex flex-col items-center">
        <div className="mb-4">
          <div className="flex">
            <div className="text-lg">Subtotal (1 item):</div>
            <div className=" text-lg font-bold">{`$ ${txnAmount}`}</div>
          </div>
          <div className="flex justify-start w-full">
            <input type="checkbox" className="mr-2"></input>
            <div className="text-sm w-full">This order contains a gift</div>
          </div>
        </div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Payment option</InputLabel>
          <Select
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            label="Payment option"
            className="w-full mb-4"
          >
            <MenuItem value={"Recurpay"}>Recurpay</MenuItem>
            <MenuItem value={"Fiat"}>Fiat Money</MenuItem>
            <MenuItem value={"EMI"}>High Interest EMI</MenuItem>
          </Select>
        </FormControl>
        <button
          disabled={paymentOption !== "Recurpay"}
          className="bg-amber-300 rounded-md p-3 w-full m-0 hover:bg-amber-400 disabled:bg-gray-300"
          onClick={handleClick}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
