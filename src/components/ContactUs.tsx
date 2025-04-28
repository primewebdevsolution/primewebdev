"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
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
import dynamic from "next/dynamic";

export function ContactUs() {
  const [state, handleSubmit] = useForm("mrbqggvr");

  const PopupButton = dynamic(
    () => import("react-calendly").then((mod) => mod.PopupButton),
    { ssr: false }
  );

  const [rootEl, setRootEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootEl(document.body);
    }
  }, []);

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
      <div className="mt-36 mb-14 px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-purple">
          Thank you!
        </h2>
        <p className="text-center text-lg md:text-xl mt-4">
          Your message has been successfully sent. We will get back to you as
          soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className=" py-5">
      <div id="contact" className="text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Contact Us
        </h2>
      </div>

      <div className="flex my-4 flex-col lg:flex-row gap-10 lg:gap-40 justify-center items-start  md:px-8">
        <div className="w-full max-w-md bg-white dark:bg-black-100 rounded-xl p-6 shadow-xl">
          <h1 className="text-lg md:text-xl font-semibold">Getting in Touch</h1>
          <p className="mt-3 text-md md:text-lg">
            Do you have a project in mind?
          </p>
          <Link
            href="mailto:infoprimewebdev@gmail.com"
            className="text-blue-500 hover:underline mt-3 block"
          >
            infoprimewebdev@gmail.com
          </Link>
          <div className="mt-8 -ml-4 text-white">
            <FloatingDock items={links} />
          </div>

          <div className="w-full max-w-md bg-white dark:bg-black-100 rounded-xl py-6 shadow-xl flex flex-1">
            {rootEl && (
              <PopupButton
                url="https://calendly.com/infoprimewebdev/30min"
                rootElement={rootEl}
                text="Schedule a Free Consultation"
                className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-300 shadow-lg"
              />
            )}
          </div>
        </div>

        <div className="w-full max-w-md bg-white dark:bg-black-100 rounded-xl p-2 shadow-xl">
          <h2 className="font-bold text-xl md:text-2xl text-black dark:text-white mb-2">
            Let’s Work Together
          </h2>
          <p className="text-neutral-500 dark:text-neutral-300 text-sm md:text-base mb-6">
            Fill out the form and we’ll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
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

            <LabelInputContainer>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                placeholder="project@mayhem.com"
                type="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </LabelInputContainer>

            <LabelInputContainer>
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

            <LabelInputContainer>
              <Label htmlFor="projecttype">Project type</Label>
              <Input
                id="projecttype"
                name="projecttype"
                placeholder="e.g. SaaS App"
                type="text"
              />
              <ValidationError
                prefix="Project type"
                field="projecttype"
                errors={state.errors}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
              />
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
                className="relative inline-flex h-12 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 p-[1px] shadow-lg"
              >
                <span className="inline-flex h-full w-full items-center justify-center rounded-full  text-white px-6 text-base font-medium hover:bg-gray-900 transition-all duration-300">
                  Submit Now
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

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
