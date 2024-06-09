"use client";
import Navigation from "@/screens/Navigation/Navigation";
import Welcome from "@/screens/Welcome/Welcome";
import About from "@/screens/About/About";
import Roadmap from "@/screens/Roadmap/Roadmap";
import NFT from "@/screens/NFT/NFT";
import Minigames from "@/screens/Minigames/Minigames";
import Community from "@/screens/Community/Community";
import { useRef, useEffect, useState } from "react";
import "./../scss/main.scss";
import { ScrollProvider } from "./../routes/ScrollProvider";

export default function Home() {
  return (
    <>
      <ScrollProvider>
        <Navigation />
        <Welcome />
        <About />
        <Roadmap />

        <Minigames />

        <NFT />
        <Community />
      </ScrollProvider>
    </>
  );
}
