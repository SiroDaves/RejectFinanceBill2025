"use client";

import { bio } from "@/utils/data/bio";
import Image from "next/image";
import Link from "next/link";
import { GiRead } from "react-icons/gi";
import { TbCancel } from "react-icons/tb";

const IntroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">


        <div className="flex justify-center order-1 lg:order-1">
          <Image
            src={bio.profile}
            width={350}
            height={350}
            alt={`${bio.name}'s Profile Picture`}
            className="rounded-lg transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer mb-5"
          />
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-2xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.2rem] lg:leading-[3.2rem]">
            Hi. The {" "}
            <Link href={bio.pdfLink} target="_blank">
              <span className="text-[#ef4444]">{bio.name}</span>
            </Link> is out. TBH, it
              <span className="text-[#22c55e]"> doesn`t favour US! </span> But rather, them! Let`s join hands to
             <span className="text-[#ef4444]"> REJECT it!!!</span>
          </h1>

          <div className="flex items-center gap-3 my-6">
            <Link
              href={bio.pdfLink}
              target="_blank"
              className="bg-gradient-to-r to-orange-500 from-red-600 p-[1px] rounded-full transition-all duration-300 hover:from-orange-500 hover:to-red-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-black rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Read the Bill</span>
              <GiRead size={16} />
              </button>
            </Link>

            <Link
              href="#reject"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
            >
              <span>Reject the Bill</span>
              <TbCancel size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
