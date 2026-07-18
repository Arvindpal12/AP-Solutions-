
import React from "react";
import { useNavigate } from "react-router-dom";


import Hero from "./Hero";
import Servicecard from "./Servicecard";
import Lang from "./Lang";
import ProcessCard from "./ProcessCard";
import WhyNeedSec from "./WhyNeedSec";

export default function Service() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Servicecard />
      <Lang />
      <ProcessCard />
      <WhyNeedSec />
    </main>
  );
}