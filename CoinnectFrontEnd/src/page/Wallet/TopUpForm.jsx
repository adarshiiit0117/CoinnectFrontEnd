import React from "react";
import { Input } from "@/components/ui/input";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
const TopUpForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("Razorpay");

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
   const handleSubmit = (e) => {
   
    console.log(amount,paymentMethod)
  };

  return (
    <div className=" bg-black pt-10 space-y-6 text-white  p-6 rounded-xl">
      <div>
        <h1 className="pb-1 text-sm font-medium">Enter Amount</h1>
        <Input
          onChange={handleChange}
          value={amount}
          placeholder="$9999"
          className="py-6 px-4 text-white text-lg border border-gray-700 bg-black placeholder:text-gray-500"
        />
      </div>

      <div>
        <h1 className="pb-1 text-sm font-medium">Select payment method</h1>
        <RadioGroup
          className="flex gap-4"
          defaultValue="Razorpay"
          onValueChange={handlePaymentMethodChange}
        >
          {/* Razorpay */}
          <div
            className={`flex items-center space-x-3 border px-4 py-3 rounded-md w-fit cursor-pointer ${
              paymentMethod === "Razorpay"
                ? "border-blue-500 bg-black"
                : "border-gray-700 bg-black"
            }`}
          >
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-5 w-5 text-blue-500 bg-black"
              id="razorpay"
              value="Razorpay"
            />
            <Label htmlFor="razorpay">
              <img src="r1.png" alt="Razorpay" className="w-28" />
            </Label>
          </div>

          {/* Stripe */}
          <div
            className={`flex items-center space-x-3 border px-4 py-3 rounded-md w-fit cursor-pointer ${
              paymentMethod === "Stripe"
                ? "border-blue-500 bg-black"
                : "border-gray-700 bg-black"
            }`}
          >
            <RadioGroupItem
              icon={DotFilledIcon}
              className="h-5 w-5 text-blue-500 bg-black"
              id="stripe"
              value="Stripe"
            />
            <Label htmlFor="stripe">
              <img src="r2.png" alt="Stripe" className="w-28" />
            </Label>
          </div>
        </RadioGroup>
        
      </div>
      <Button onClick={handleSubmit} className="w-full py-7">
Submit
      </Button>
    </div>
  );
};

export default TopUpForm;
