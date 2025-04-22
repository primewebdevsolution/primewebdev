"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products } from "@/data";

export function Showcase() {
  return (
    <div id="portfolio" className="mt-16 ">
        <HeroParallax products={products}  />
    </div>
  )
}
