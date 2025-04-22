import Image from "next/image";
import React from "react";

export default function BrandLogoSlidAnimation() {
  return (
    <>
      <div className="relative z-50 top-[-40px] flex overflow-hidden space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24 group mask-gradient">
        <div className="flex flex-row space-x-8 sm:space-x-12 md:space-x-16 lg:space-x-24 animate-loop-scroll group-hover:paused">
          <Image
            width={100}
            height={100}
            src="/brandlogo/Appwrite.png"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Appwrite Logo"
          />
          <Image
            width={100}
            height={100}
            src="/brandlogo/Cloudinary.png"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Cloudinary Logo"
          />
          <Image
            width={100}
            height={100}
            src="/brandlogo/Docker.png"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Docker Logo"
          />
          <Image
            width={100}
            height={100}
            src="/brandlogo/Hostinger.png"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Hostinger Logo"
          />
          <Image
            width={100}
            height={100}
            src="/logo.svg"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Logo"
          />

          <Image
            width={100}
            height={100}
            src="/brandlogo/Appwrite.png"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Appwrite Logo"
          />
          <Image
            width={100}
            height={100}
            src="/brandlogo/Cloudinary.png"
            className="object-contain shrink-0 self-stretch my-auto w-[100px] sm:w-[130px] md:w-[130px] lg:w-[130px]"
            alt="Cloudinary Logo"
          />
        </div>
      </div>
    </>
  );
}
