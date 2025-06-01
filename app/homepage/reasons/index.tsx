"use client";
import { reasons } from '@/utils/data/reasons';
import ReasonCard from './reason-card';

const Projects = () => {
  return (
    <div id="reasons" className="relative z-50 my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-red-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#ef4444] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            WHY YOU SHOULD REJECT IT
          </span>
          <span className="w-full h-[2px] bg-[#c2410c]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {reasons.slice(0, 4).map((reason, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ReasonCard reason={reason} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
