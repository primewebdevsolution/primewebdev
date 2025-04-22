'use client'

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "./ui/tailwindcss-buttons";
import Link from "next/link";

export default function Hero() {

  
  return (
    <div className="pb-20 pt-[0rem] transition-opacity duration-1000 mt-[7rem]">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw] "
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-[50rem] lg:max-[60vw] flex flex-col items-center">
          <h2 className={` uppercase tracking-widest text-xs text-center text-blue-100 max-w-80`}>
            ✨ Your work spaced perfected
          </h2>
          <TextGenerateEffect
            className="text-center  text-[33px] md:text-5xl lg:text-5xl "
            words="Crafting Your Digital Presence, One Snap at a Time"
          />
          <p className={` text-center md:tracking-wider mb-10 text-sm md:text-lg lg:text-1xl`}>
            At primewebdev, we turn your vision into reality with innovative web development and design solutions that stand out and engage your audience.
          </p>
          <div className={``}>
            <Link href="/#contact">
              <MagicButton 
                title="Book a Free Consultation" 
                icon=""
                position="right"
                otherClasses="rounded-full text-xs font-bold md:text-sm lg:text-sm"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
