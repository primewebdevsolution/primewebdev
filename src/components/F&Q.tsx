import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fq } from "@/data/index";

export function FQ() {
  return (
    <>
    <h1 className=" text-center text-white-100 text-sm sm:text-md lg:text-lg xl:text-2xl font-bold mt-6">Frequently Asked Questions (FAQs)</h1>
    <div className="border border-b-[1px] opacity-5 border-white-200 mb-5 mt-2"></div>
      <Accordion type="single" collapsible className="w-full text-white">
      {fq.map((item) => (
        <AccordionItem value={item.id} key={item.id} className="border-b border-gray-700">
          <AccordionTrigger className="p-4 text-sm md:text-md lg:text-md font-normal">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="p-4 text-base md:text-md lg:text-md font-normal text-[rgb(198,198,198)]">
            {item.Answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
    </>
  );
}
