import React from "react";

const HamburgerButton = () => {
  return (
    <button class="group h-20 w-20 rounded-lg border-2 border-black">
      <div class="grid justify-items-center gap-1.5">
        <span class="h-1 w-8 rounded-full bg-black transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
        <span class="h-1 w-8 rounded-full bg-black group-hover:scale-x-0 transition"></span>
        <span class="h-1 w-8 rounded-full bg-black group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
      </div>
    </button>
  );
};

export default HamburgerButton;
