import React from "react";
import { Check } from "lucide-react";

function Section2() {
  return (
    <div className="mt-20  w-full h-screen xl:px-135">
      <h1 className="text-3xl w-full font-semibold">
        “Everything Starts as a Square” is a book and video course that teaches
        you a simple method to designing icons that anyone can learn.
      </h1>
      <p className="mt-5 text-xl">
        Before I learned how to design icons myself, I always imagined that they
        were drawn by hand using the pen tool, some sort of fancy graphics
        tablet, and hours and hours spent manually fine-tuning bezier curves.
      </p>
      <p className="mt-5 text-xl">
        But it turns out this isn’t how great icon designers work at all.
      </p>
      <p className="mt-5 text-xl">
        In “Everything Starts as a Square”, you’ll learn the systems experts use
        to create pixel perfect icons, without relying on a steady hand.
      </p>
      <div className="flex p-5">
        <Check color="blue" />
        <p className="ml-5">
          Using boolean operations to combine basic shapes into complex icons
        </p>
      </div>
      <div className="flex p-5">
        <Check color="blue" />
        <p className="ml-5">How to adapt icons to different sizes</p>
      </div>
      <div className="flex p-5">
        <Check color="blue" />
        <p className="ml-5">
          Translating icons from an outline style to a solid style
        </p>
      </div>
      <div className="flex p-5">
        <Check color="blue" />
        <p className="ml-5">
          Identifying the characteristics that make an icon set cohesive
        </p>
      </div>
      <div className="flex p-5">
        <Check color="blue" />
        <p className="ml-5">
          Figma features and keyboard shortcuts to speed up your workflow
        </p>
      </div>
      <p className="mt-5 text-xl">
        By the end of the book, you’ll have all the confidence you need to dig
        in and start creating beautiful icons that can hold their own against
        any of the sets you can find online.
      </p>

      <p className="mt-5 text-xl text-blue-700 font-medium">Get two free chapters straight to your inbox →</p>
    </div>
  );
}

export default Section2;
