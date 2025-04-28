import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  
  return (
    <div className="flex items-center justify-between  ">
      <div className="text-[rgb(198,198,198)] pt-6 ">
        <h4 className="text-xs sm:text-lg">Copyright ©2025 primewebdev</h4>
      </div>
      <div className="mb-[-1rem]">
        <Link href={'/'}>
        <Image
        width={250}
        height={100}
        src="/logo.svg"
        alt="logo"
        />
        </Link>
      </div>
    </div>
  );
}
