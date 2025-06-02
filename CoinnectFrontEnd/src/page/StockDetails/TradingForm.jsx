import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TradingForm = () => {
  const handleChange = () => {};

  return (
    <div className="flex items-center justify-center  text-white bg-black">
      <div className="bg-[#0e0f12] p-6 rounded-xl shadow-lg w-[400px] space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-sm font-semibold uppercase tracking-wide">
            how much do you want to spend?
          </h2>
          <button className="text-white text-lg font-bold">&times;</button>
        </div>

        {/* Amount Inputs */}
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="enter amount..."
            className="bg-[#1c1c1e] text-white border border-gray-700 focus:outline-none"
            onChange={handleChange}
          />
          <div className="bg-[#1c1c1e] text-white flex items-center justify-center rounded-md px-4 min-w-[70px] border border-gray-700">
            0
          </div>
        </div>

        {/* Coin Info */}
        <div className="flex items-center gap-3 text-white text-sm">
          <img
            src="https://m.media-amazon.com/images/I/61Iw4aixZ1L.jpg"
            alt="btc"
            className="w-5 h-5 rounded-full"
          />
          <span className="font-medium">BTC</span> • <span className="text-gray-400">vbitcoin</span>
        </div>
        <div className="flex justify-between text-white text-sm">
          <span className="font-semibold text-lg">$3689.97</span>
          <span className="text-green-400 text-xs">1887310531 (0.4275%)</span>
        </div>

        {/* Order Type */}
        <div className="flex justify-between text-gray-300 text-sm">
          <span>Order Type</span>
          <span className="text-white">Market Order</span>
        </div>

        {/* Available Cash */}
        <div className="flex justify-between text-gray-300 text-sm">
          <span>Available Case</span>
          <span className="text-white font-semibold text-lg">$4400.53</span>
        </div>

        {/* Buy Button */}
        <Button
          disabled
          className="w-full bg-gray-700 text-white py-2 rounded-md cursor-not-allowed opacity-60"
        >
          BUY
        </Button>

        {/* Or Sell */}
        <div className="text-center text-gray-400 text-sm">Or Sell</div>
      </div>
      <div className='flex items-center justify-between'>
        <p>Order Type</p>
        <p>Market Order</p>

      </div>
    </div>
  );
};

export default TradingForm;
