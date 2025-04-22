import React from "react";
import CardSpotlight from "@/components/ui/card-spotlight";
import Link from "next/link";
import MagicButton from "./ui/tailwindcss-buttons";

export function Approach() {
  return (
    <>
      <div className=" mt-[-120px] flex flex-wrap gap-4 justify-between items-center">
        <CardSpotlight className="h-100 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            The primewebdev way, Crafting Custom Digital Solution
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Steps taken by primewebdev:
            <ul className="list-none mt-2">
              <Step title="Discovery and Strategy" />
              <Step title="Design and Development" />
              <Step title="Launch and Support" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            We believe in delivering tailor-made digital solutions. From initial
            discovery to post-launch support, our process is designed to create
            website that not only look great but also deliver measurable results
            for your business.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-100 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Your Success Journey, Building a Powerful Online Presence
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Steps taken by primewebdev:
            <ul className="list-none mt-2">
              <Step title="Consultaion & Planning" />
              <Step title="Design & User Experience" />
              <Step title="Development & Optimization" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            primewebdev is committed to guiding you through the process of
            establishing a powerfull online presence. From planning to
            optimization, we work with you every step of the way to ensure your
            website is a success.
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-100 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Results-Driven Web Development, Turning Vision into Reality
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Steps taken by primewebdev:
            <ul className="list-none mt-2">
              <Step title="Goal Setting & Research" />
              <Step title="Custom Design & Development" />
              <Step title="Testing and Launch" />
            </ul>
          </div>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">
            Our approach is focused on delivering tangible results. We transform
            your vision into fully functional website that drives traffic,
            engages users, and boosts your online success.
          </p>
        </CardSpotlight>
      </div>
      <div className="mt-12 flex justify-center items-center font-bold">
      <div>
            <Link href="#about">
              <MagicButton
                title="Get Started"
                icon=""
                position="right"
                otherClasses="rounded-full font-bold text-md sm:text-md md:text-xl lg:text-2xl  lg:w-full lg:h-full"
              />
            </Link>
          </div>
      </div>

      <div className=" mt-12 border border-b-purple/10 "></div>
    </>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
