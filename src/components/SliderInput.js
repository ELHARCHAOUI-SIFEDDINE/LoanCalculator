import React from "react";

const SliderInput = ({
  value,
  onChange,
  min,
  max,
  step,
  label,
  icon,
  symbol,
  formatter,
}) => (
  <div className="bg-white rounded-2xl shadow-md p-4">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center space-x-2">
        <div className="p-2 bg-blue-600 rounded-xl">
          {React.cloneElement(icon, { className: "w-4 h-4 text-white" })}
        </div>
        <span className="text-sm font-medium text-gray-700">{label}</span>
      </div>
      <span className="text-lg font-bold text-blue-600">
        {symbol}
        {formatter ? formatter(value) : value}
      </span>
    </div>
    <div className="relative mt-2">
      <div className="h-1.5 bg-gray-100 rounded-full">
        <div
          className="absolute h-1.5 bg-blue-600 rounded-full"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="absolute top-0 w-full h-1.5 appearance-none bg-transparent cursor-pointer"
      />
    </div>
    <div className="flex justify-between mt-1">
      <span className="text-xs text-gray-500">
        {symbol}
        {formatter ? formatter(min) : min}
      </span>
      <span className="text-xs text-gray-500">
        {symbol}
        {formatter ? formatter(max) : max}
      </span>
    </div>
  </div>
);

export default SliderInput;
