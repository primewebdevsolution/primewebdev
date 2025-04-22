"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/Floating-dock";

export function ContactUs() {
  const [state, handleSubmit] = useForm("xpwzvore");
    
  
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-300" />,
      href: "https://www.instagram.com/primewebdev_?igsh=MXVjNHRxbWNrM25qdw==",
    },

    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-full w-full text-neutral-300" />,
      href: "https://www.facebook.com/share/18uD4UqvAG/",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-neutral-300" />,
      href: "https://www.linkedin.com/in/primewebdev",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-300" />,
      href: "https://x.com/primewebdev_?t=sIA_1mfn-nl4Ee23HtRCQA&s=09",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "https://github.com/primewebdevsolution",
    },
  ];

  if (state.succeeded) {
    return (
      <>
        <div className="mt-36 mb-14 px-4 md:px-8">
          <h2 className="text-center text-2xl md:text-4xl font-bold text-purple">
            Thank you!
          </h2>
          <p className="text-center text-lg md:text-xl mt-4">
            Your message has been successfully sent. We will get back to you as
            soon as possible.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div id="contact" className="mt-28 mb-14 px-0 md:px-0">
        <h2 className="ml-0 text-center lg:text-nowrap px-0 ext-2xl md:text-4xl font-bold text-white">
          Contact Us
        </h2>
        <div className="border border-b-[1px] opacity-5 border-white-200 mb-5 mt-2"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-36 justify-center items-start">
        <div className="w-full max-w-md bg-white dark:bg-black-100 rounded-lg p-4 md:p-8 shadow-md">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">
              Getting in Touch
            </h1>
            <h2 className="text-md md:text-lg mt-3">
              Do you have a Project in your mind?
            </h2>
          </div>
          <div className="mt-[3rem] -ml-4 text-white-100">
            <FloatingDock items={links} />
          </div>
        </div>
        <div className="w-full max-w-md bg-white dark:bg-black-100 rounded-lg p-4 md:p-8 shadow-md">
          <h2 className="font-bold text-lg md:text-xl text-neutral-400 dark:text-neutral-200">
            Welcome to primewebdev
          </h2>
          <p className="text-neutral-600 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300">
            Ready to Boost Your Digital Presence? Let's Make it Happen!
          </p>

          <form
            className="my-8"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="Tyler"
                  type="text"
                />
                <ValidationError
                  prefix="First name"
                  field="firstname"
                  errors={state.errors}
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Durden"
                  type="text"
                />
                <ValidationError
                  prefix="Last name"
                  field="lastname"
                  errors={state.errors}
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="phonenumber">Phone number</Label>
              <Input
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone number"
                type="text"
              />
              <ValidationError
                prefix="Phone number"
                field="phonenumber"
                errors={state.errors}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="projecttype">Project type</Label>
              <Input
                id="projecttype"
                name="projecttype"
                placeholder="Project type"
                type="text"
              />
              <ValidationError
                prefix="Project type"
                field="projecttype"
                errors={state.errors}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Message..." />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </LabelInputContainer>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[2px]"
              >
                <span className="absolute inset-[-1000%] animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-xs font-medium text-white backdrop-blur-3xl sm:px-8 sm:py-2 sm:text-sm md:px-8 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg xl:px-8 xl:py-5 xl:text-xl">
                  <div className="flex items-center gap-2">Get Started</div>
                  <BottomGradient />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2", className)}>{children}</div>
  );
};
