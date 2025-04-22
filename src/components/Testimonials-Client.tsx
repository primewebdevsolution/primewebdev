"use client";

import { InfiniteMovingCards } from "@/components/ui/Infinite-moving-cards";
import { testimonials } from "@/data/index";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export function Testimonial() {
  return (
    <div className="sm:mt-0 h-[35rem] rounded-md flex flex-col antialiased  items-center justify-center relative mb-24">
      <div className="text-lg my-32">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-500">
          <div className="flex items-center justify-center gap-2">
            <RiDoubleQuotesL className="text-md text-purple-500" />
            Client Success{" "}
            <span className=" md:text-xl lg:text-2xl xl:text-3xl text-[rgb(203,172,249)]">
              Stories
            </span>
            <RiDoubleQuotesR />
          </div>
          <p className="px-4 sm:px-0 md:w-[44rem] lg:w-[48rem] text-center md:tracking-wider mt-4 mb-2 text-sm md:text-lg lg:text-xl text-gray-300">
            See what our clients have to say about thier experience with
            primewebdev. Discover how we've helped businesses like yours achieve
            their online goals through custom web solutions that deliver real
            results.
          </p>
        </h2>
      </div>
      <div className="mt-[-5rem]  mb-4">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
