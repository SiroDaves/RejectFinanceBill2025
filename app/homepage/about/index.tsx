"use client";
import { bio } from "@/utils/data/bio";
import dynamic from "next/dynamic";

interface AboutSectionProps { }

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-red-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#ef4444] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            ABOUT THE FINANCE BILL 2025
          </span>
          <span className="w-full h-[2px] bg-[#c2410c]"></span>
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-16">
        <p className="text-black text-sm lg:text-lg">
          {bio.description}
        </p>
      </div>

    </div>
  );
};

export default AboutSection;
