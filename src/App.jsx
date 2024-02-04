import React, { useState } from "react";
import QRCode from "react-qr-code";

const App = () => {
  const [amount, setAmount] = useState("");
  const [qrPage, setQrPage] = useState(false);
  const [qrValue, setQrValue] = useState("");
  // ++++++++++++++++++++++++++++++
  import.meta.env.VITE_SOME_KEY;
  const shopName = import.meta.env.VITE_shopName;
  const upiId = import.meta.env.VITE_upiId;
  const merchantName = import.meta.env.VITE_merchantName;
  const currency = "INR";
  const transactionNote = "";
  let qrcode = `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount}&tn=${transactionNote}&cu=${currency}`;

  // ++++++++++++++++++++++++++++++
  const qrHandler = () => {
    setQrValue(qrcode);
    // console.log(qrcode);
    setQrPage(true);
  };
  const buttonDisable = Number(amount) > 0 ? false : true;
  // console.log(merchantData);
  // #############################
  return (
    <div className="hidden max-[500px]:flex max-[500px]:flex-col text-black bg-gray-900 p-5 mx-auto my-auto max-[500px]:h-[100vh]">
      {!qrPage && (
        <div className="text-center">
          <h1 className=" text-3xl font-bold text-gray-600">{shopName}</h1>
          <h2 className="text-2xl mt-6 mb-4 text-gray-500">Enter Amount</h2>
          <input
            className="p-2 text-3xl text-center w-min"
            type="text"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
          />
          <button
            disabled={buttonDisable}
            onClick={qrHandler}
            className=" bg-blue-700 text-white mt-4 p-3 rounded-md">
            {buttonDisable ? "Enter Amount" : "Continue"}
          </button>
        </div>
      )}{" "}
      {qrPage && (
        <div className="text-center">
          <h2 className="text-2xl mt-6 mb-4 text-gray-500 text-center">
            Amount: ₹{amount}
          </h2>
          <div className=" bg-white p-3 mx-auto">
            <QRCode title="Amount" value={qrValue} className="mx-auto" />
          </div>
          <button
            onClick={() => (setQrPage(false), setAmount(0))}
            className="bg-blue-700 text-white mt-4 p-3 rounded-md w-40">
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
