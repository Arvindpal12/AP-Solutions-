
import React from "react";
import { useNavigate } from "react-router-dom";
import Phero from "./Project/Phero";
import Pproject from "./Project/Pproject";
import Lang from "./Lang";
import ProcessCard from "./ProcessCard";
import WhyNeedSec from "./WhyNeedSec";

export default function Portfolio() {
  return (
    <main className="w-full overflow-x-hidden">
      <Phero />  
      <WhyNeedSec />
      <Pproject />
      <Lang />
      <ProcessCard />
    </main>
  );
}