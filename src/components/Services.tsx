"use client";

import { Tabs } from "../components/ui/Tabs";
import { servicesData } from "@/data/index";
import { MdMiscellaneousServices } from "react-icons/md";

export function Services() {
  return (
    <div id="services" className={`h-[45rem] sm:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center py-5 sm:my-40 mb-[-4rem] `}>
      <div className="mb-[8rem] md:mb-8 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
        <h4 className="text-[rgb(142,140,149)] text-xs sm:text-sm md:text-base">
          What Can We Do
        </h4>
        <div className="text-lg mt-2">
        <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-purple-500">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <MdMiscellaneousServices className="md:text-xl lg:text-2xl xl:text-3xl text-[rgb(203,172,249)]" />
            Comprehensive Digital Solutions
            {/* <RiServiceFill className="text-purple"/> */}
          </div>
          <p className="px-4 sm:px-0 md:w-[44rem] lg:w-[48rem] text-center md:tracking-wider mt-4 mb-2 text-sm md:text-lg lg:text-xl text-gray-300">
            We provide full-service solutions for web app and web development. From concept to deployment, our team handles every aspect of your project, ensuring seamless integration and exceptional results.
          </p>
        </h2>
      </div>
      </div>

      <Tabs
        tabs={servicesData.map((service, index) => ({
          title: service.title,
          value: service.value || `service-${index}`,
          content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 sm:p-10 text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white" style={{
              background:
                "linear-gradient(-45deg, rgba(3, 0, 20) 0%, rgba(160, 32, 240, 1) 100%)",
            }}>
              <h2 className="text-white">{service.title}</h2>
              <p className="text-[rgb(198,198,198)] text-[15px] sm:text-sm md:text-base lg:text-lg pt-2 pb-2 px-2">
                {service.description}
              </p>
            </div>
          ),
        }))}
      />
    </div>
  );
}
