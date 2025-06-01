import * as React from 'react';

interface Reason {
  title: string;
  description: string;
}

interface ReasonCardProps {
  reason: Reason;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ reason }) => {
  return (
    <div className="border-[#eee] relative rounded-lg border bg-[#eee] w-full">

      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-center ml-3 text-black text-base lg:text-xl">
          {reason.title}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-red-500 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">


          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-green-900">{reason.description}</span>
          </div>
        </code>
      </div>
    </div>
  );
};

export default ReasonCard;
