"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 flex flex-col justify-center items-center">
        <h4 className="text-[rgb(142,140,149)] text-xs sm:text-sm md:text-base">
          What Can We Do
        </h4>
        <h2 className=" md:text-2xl lg:text-5xl xl:text-4xl font-bold text-white">
      Some recent work...
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-[#030014] p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    // category: "Artificial Intelligence",
    // title: "You can do more with AI.",
    src: "https://drive.google.com/uc?export=view&id=1xttdfxQiXA3OzgaH3bqvk8tc2T-49TEZ",
    content: <DummyContent />,
  },
  {
    // category: "Productivity",
    // title: "Enhance your productivity.",
    src: "https://drive.google.com/uc?export=view&id=1oAeZqJQ70KYpXlEx9RajZwDVq18aepwm",
    content: <DummyContent />,
  },
  {
    // category: "Product",
    // title: "Launching the new Apple Vision Pro.",
    src: "https://drive.google.com/uc?export=view&id=1lYOYTIX5uUIgThzdczD3O-tNI0ErT1gv",
    content: <DummyContent />,
  },

  {
    // category: "Product",
    // title: "Maps for your iPhone 15 Pro Max.",
    src: "https://drive.google.com/uc?export=view&id=1g7iL2Ix5ylBVcGaZn7xrDXBE3JvCIBAu",
    content: <DummyContent />,
  },
  {
  //   // category: "Product",
  //   // title: "Maps for your iPhone 15 Pro Max.",
     src: "https://drive.google.com/uc?export=view&id=1Wh02-paWYsbWOKzERK0snyL9CHqp_cDH",
     content: <DummyContent />,
  },
  {
  //   // category: "Product",
  //   // title: "Maps for your iPhone 15 Pro Max.",
     src: "https://drive.google.com/uc?export=view&id=1LBRe7tjHTvRtpp0dHdZIL0Rlfl-kNC7I",
     content: <DummyContent />,
  },
];
