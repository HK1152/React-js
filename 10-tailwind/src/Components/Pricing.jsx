import { Check } from "lucide-react";
import React from "react";
import PricingCard from "./PricingCard";

function Pricing() {
  return (
    <div>
      <div className="lg:px-130 pt-20 mt-10">
        <button className="border rounded-4xl px-3 py-2 text-blue-700 font-medium">
          04 | Pricing
        </button>
        <h1 className="mt-5 text-5xl font-bold">Pick your package</h1>
        <p className="mt-3 text-xl">
          “Everything Starts as a Square” is available in two different packages
          so you can pick the one that’s right for you.
        </p>
      </div>
      <div className="mx-100 mt-20 bg-gray-50 flex rounded-[100px] p-15">
        <div className="w-1/2 p-10">
          <span className="flex">
            <p className="text-3xl font-bold text-gray-500">$</p>
            <p className="text-6xl font-medium ">15</p>
          </span>
          <h1 className="font-medium mt-10 text-xl">Essential</h1>
          <p className="mt-5 text-lg text-gray-500">
            The perfect starting point if you’re on a budget.
          </p>
          <button className="bg-black rounded text-white font-bold px-27 py-2 mt-8">
            Get Started
          </button>
          <div className="flex p-5 border-b border-b-gray-500 pb-3">
            <Check color="gray" />
            <p className="ml-5 ">The 240-page ebook</p>
          </div>

          <div className="flex p-5 border-b border-b-gray-500 pb-3">
            <Check color="gray" />
            <p className="ml-5 ">Figma icon templates</p>
          </div>

          <div className="flex p-5 border-b border-b-gray-500 pb-3">
            <Check color="gray" />
            <p className="ml-5 ">Community access</p>
          </div>
        </div>

        <div className="w-1/2 px-10 py-20 bg-blue-600 text-white rounded-[90px]">
          <span className="flex">
            <p className="text-3xl font-bold text-gray-300">$</p>
            <p className="text-6xl font-medium ">299</p>
          </span>
          <h1 className="font-medium mt-10 text-xl">Complete</h1>
          <p className="mt-5 text-lg text-gray-200">
            Everything icon resource you could ever ask for.
          </p>
          <button className="bg-white rounded text-blue-600 font-bold px-27 py-2 mt-8">
            Get Started
          </button>
          <div className="flex p-5 border-b border-b-gray-400 pb-3">
            <Check color="white" />
            <p className="ml-5 ">The 240-page ebook</p>
          </div>

          <div className="flex p-5 border-b border-b-gray-400 pb-3">
            <Check color="white" />
            <p className="ml-5 ">Figma icon templates</p>
          </div>

          <div className="flex p-5 border-b border-b-gray-400 pb-3">
            <Check color="white" />
            <p className="ml-5 ">Over an hour of screencasts</p>
          </div>
          <div className="flex p-5 border-b border-b-gray-400 pb-3">
            <Check color="white" />
            <p className="ml-5 ">Weekly icon teardowns</p>
          </div>
          <div className="flex p-5 border-b border-b-gray-400 pb-3">
            <Check color="white" />
            <p className="ml-5 ">Community access</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5">
        <h1 className="text-2xl font-medium mb-3">Some kind words from early customers...</h1>
        <p className="text-xl w-230 text-center text-gray-500">
          I worked with a small group of early access customers to make sure all
          of the content in the book was exactly what they needed. Hears what
          they had to say about the finished product.
        </p>
      </div>

      <PricingCard />
    </div>
  );
}

export default Pricing;
