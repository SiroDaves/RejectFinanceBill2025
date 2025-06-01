"use client";
import ContactForm from './reject-form';

function RejectSection() {
  return (
    <div id="reject" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-red-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#ef4444] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
            NOW REJECT THE BILL
          </span>
          <span className="w-full h-[2px] bg-[#c2410c]"></span>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-16">
        <ContactForm />
      </div>
    </div>
  );
};

export default RejectSection;
