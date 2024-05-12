import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
// Đường dẫn tới component RadioBox

const options = [
  { value: "VNPay", title: "Thanh Toán Online", image: "/images/vnpay.png" },
  {
    value: "tienmat",
    title: "Thanh Toán Tiền Mặt",
    image: "/images/cash.png",
  },
];

function RadioBox() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <PaymentCard
        options={options}
        value={selectedOption}
        onChange={handleChange}
      />
    </div>
  );
}

export default RadioBox;
