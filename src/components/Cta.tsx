import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/tailwindcss-buttons";

export default function Cta() {
  return (
    <div className="pb-20 pt-[0rem] mt-36 sm:mt-36 md:mt-36 lg:mt-36 xl:mt-36 transition-opacity duration-1000">
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0 ">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-[50rem] lg:max-[60vw] flex flex-col items-center">
          <TextGenerateEffect
            duration={2}
            filter={false}
            className="text-center text-[30px] md:text-4xl lg:text-4xl "
            words="Ready to Boost Your Digital Presence? Let's Make it Happen!"
          />
          <p
            className={`text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl`}
          >
            Turn your online ideas into reality with primewebdev. Reach out today to
            start building a stronger, more effective digital presence. we're
            here to help you succed-let's begin!.
          </p>
          
        </div>
      </div>
    </div>
  );
}
