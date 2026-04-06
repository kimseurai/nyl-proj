import React from "react";
import Breadcrumb from "./breadcrumb";
import Socialbutton from "./socialbutton";

export default function Header() {
  return (
    <div className=" flex">
      <h1 className="text-[56px] font-light text-[#17181C] leading-tight">
        How to secure your family's financial future
      </h1>
      <Socialbutton />
    </div>
  );
}
